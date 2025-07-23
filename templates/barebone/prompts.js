// templates/barebone/prompts.js
export const prompts = [
	{
		type: 'list',
		name: 'packageManager',
		message: 'Which package manager would you like to use?',
		choices: [
			{ name: 'Bun (recommended)', value: 'bun' },
			{ name: 'npm', value: 'npm' },
			{ name: 'yarn', value: 'yarn' },
			{ name: 'pnpm', value: 'pnpm' },
		],
		default: 'bun',
	},
	{
		type: 'confirm',
		name: 'typescript',
		message: 'Use TypeScript?',
		default: true,
	},
	{
		type: 'confirm',
		name: 'eslint',
		message: 'Add ESLint for code linting?',
		default: true,
	},
	{
		type: 'confirm',
		name: 'prettier',
		message: 'Add Prettier for code formatting?',
		default: true,
	},
	{
		type: 'confirm',
		name: 'docker',
		message: 'Add Docker configuration?',
		default: true,
	},
	{
		type: 'confirm',
		name: 'testing',
		message: 'Include testing setup?',
		default: true,
	},
	{
		type: 'confirm',
		name: 'database',
		message: 'Include database support?',
		default: true,
	},
	{
		type: 'confirm',
		name: 'git',
		message: 'Initialize git repository?',
		default: true,
	},
]
