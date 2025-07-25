const config = {
	semi: false,
	trailingComma: 'none',
	singleQuote: true,
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	arrowParens: 'always',
	bracketSpacing: true,
	endOfLine: 'lf',
	jsxSingleQuote: false,
	quoteProps: 'as-needed',
	proseWrap: 'preserve',
	embeddedLanguageFormatting: 'auto',
	overrides: [
		{
			files: '*.json',
			options: {
				printWidth: 80
			}
		},
		{
			files: '*.md',
			options: {
				proseWrap: 'always'
			}
		}
	]
}
export default config
