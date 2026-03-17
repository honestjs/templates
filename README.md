# Creating templates

This guide describes how HonestJS CLI scaffolds projects from templates. Use it to add a new template to this repo or to build your own template layout.

## Template layout

Each template lives in a directory under `templates/` (e.g. `templates/barebone`, `templates/api-starter`). The directory must contain:

| Item | Required | Description |
|------|----------|-------------|
| **template.json** | Yes | Metadata: `name`, `description`, `version`, `author`, optional `variables`, etc. |
| **files/** | Yes | Directory whose contents are copied into the new project. Everything under `files/` is copied except paths containing `node_modules` or `.git`. |

Optional files:

| Item | Description |
|------|-------------|
| **prompts.js** | Exports a `prompts` array (e.g. [prompts](https://www.npmjs.com/package/prompts) format). The CLI runs these after the user picks a template and before general options (package manager, TypeScript, ESLint, etc.). Answers are merged into the project config and passed to transforms and variable substitution. |
| **transforms.js** | Exports a `transforms` object: keys are file paths or glob patterns, values are transform functions. See [Transforms](#transforms) below. |

**Registry:** The repo root must have `templates.json` that lists each template with at least `name`, `description`, and `path` (e.g. `templates/barebone`).

---

## Variable substitution

After copying `files/` into the project, the CLI replaces placeholders `{{key}}` in files with extension `.json`, `.md`, `.js`, or `.ts`.

- **Substitution map:** Built from `template.json`’s `variables` (template defaults) and the project config (user choices and prompt answers). For overlapping keys, **config wins** over template variables.
- **Values:** Only primitive values (string, number, boolean) are used. `null` and `undefined` become an empty string. Nested objects are skipped so you don’t get `[object Object]` in files.
- **Example:** If `template.json` has `"variables": { "apiPrefix": "/v1" }` and the user’s project name is `my-api`, then `{{apiPrefix}}` and `{{projectName}}` in your template files become `/v1` and `my-api` (project name comes from config).

You can use any config key as a placeholder, e.g. `{{name}}`, `{{packageManager}}`, `{{template}}`, `{{testing}}`, `{{eslint}}`, plus any keys you define in `variables` or collect via `prompts.js`.

---

## Transforms

If `transforms.js` exists, the CLI loads it and runs a **transform** for each project file that matches a key in the exported `transforms` object.

### Signature

Each transform is a function:

```js
(content, config) => string | null | { source: string } | Promise<...>
```

- **`content`:** Current file content (string).
- **`config`:** Project config (name, template, packageManager, typescript, eslint, and any prompt answers like `testing`, `frontend`).

Return value:

- **`string`** – Replace the file content with this string.
- **`null`** – Delete the file (e.g. remove test files when the user opted out of testing).
- **`{ source: string }`** – Replace the file with the file at `source` (path relative to the templates root, or absolute). Used to pull in another template file.

Transforms may return a **Promise** of the above (e.g. for async I/O); the CLI awaits them.

### Keys: exact paths and globs

- **Exact path:** Key is a relative path from the project root, e.g. `'package.json'`, `'README.md'`. The path must use forward slashes when matching on Windows.
- **Glob:** Key contains `*` or `?` and is matched with [minimatch](https://github.com/isaacs/minimatch), e.g. `'src/**/*.test.ts'`, `'src/**/*.spec.ts'`. Use globs to apply the same transform to many files (e.g. delete all test files when `config.testing` is false).

The CLI tries an exact match first, then iterates glob keys. The first matching key wins.

### Order of operations

1. Copy `files/` into the project.
2. Apply **variable substitution** (all `{{key}}` in .json, .md, .js, .ts).
3. Run **transforms** (each matching file is read, the transform is called, and the file is updated, removed, or replaced from `source`).
4. Apply **project configuration** (package.json name and scripts, README placeholders, git init, install if requested).
5. Copy **shared configs** (see below).

---

## Shared configs

Optional tooling files (ESLint, Prettier, TypeScript, Docker, .gitignore, LICENSE, etc.) are not stored inside each template’s `files/`. They live in **shared/configs/** and are copied into the project only when the user has enabled the corresponding option.

- **Manifest:** `shared/configs/manifest.json` lists entries `{ "file": "<filename>", "condition": "<configKey>" }`. For example `"condition": "eslint"` means “copy this file only when `config.eslint` is truthy.” Use `"condition": true` for files that are always copied (e.g. LICENSE).
- **Config keys** match the CLI’s project config: `eslint`, `prettier`, `typescript`, `docker`, `git`, etc. These are set by the user during `honestjs new` (or defaults with `--yes`).
- If the manifest is missing (e.g. old cache), the CLI falls back to a built-in list with the same semantics.

Adding a new shared config (e.g. a new tool) only requires adding an entry to `shared/configs/manifest.json` and placing the file in `shared/configs/`; no CLI code change is needed.

---

## Summary

- Put your template files in **files/**; the whole tree is copied (excluding `node_modules` and `.git`).
- Use **template.json** for metadata and optional **variables** for default placeholders.
- Use **{{key}}** in .json, .md, .js, .ts; keys come from config and template variables (config wins).
- Use **prompts.js** to ask template-specific questions; answers go into config and placeholders/transforms.
- Use **transforms.js** to change or remove files by path or glob; return string, null, or `{ source }` (sync or async).
- Shared configs in **shared/configs/** are added based on **manifest.json** and user options (eslint, prettier, docker, etc.).

For examples, see the existing templates in this repo (e.g. `templates/barebone`, `templates/api-starter`).
