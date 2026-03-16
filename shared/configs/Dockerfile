# Bun-based. For npm/yarn/pnpm, the CLI substitutes package-manager-specific commands.
# Works without bun.lock (run `bun install` in project first for reproducible lockfile).
# Does not require tsconfig.json (Bun builds TypeScript without it).
FROM oven/bun:1 as base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json /temp/dev/
RUN cd /temp/dev && bun install

RUN mkdir -p /temp/prod
COPY package.json /temp/prod/
RUN cd /temp/prod && bun install --production

FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY package.json ./
COPY src ./src
RUN bun run build:bun

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/dist ./dist
COPY --from=prerelease /usr/src/app/package.json ./

ENTRYPOINT [ "bun", "start" ] 