export const prompts = [
	{
		type: 'toggle',
		name: 'testing',
		message: 'Include test files and test script?',
		initial: true,
		active: 'yes',
		inactive: 'no',
	},
	{
		type: 'toggle',
		name: 'frontend',
		message: 'Include frontend views/components/static assets?',
		initial: true,
		active: 'yes',
		inactive: 'no',
	},
]
