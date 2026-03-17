import { baseTransforms } from '../../shared/transforms/base.js'

export const transforms = {
	...baseTransforms,

	'src/components/**/*.tsx': (content, variables) => (variables.frontend ? content : null),
	'src/layouts/**/*.tsx': (content, variables) => (variables.frontend ? content : null),
	'src/modules/**/components/**/*.tsx': (content, variables) => (variables.frontend ? content : null),
	'src/modules/**/views/**/*.tsx': (content, variables) => (variables.frontend ? content : null),
	'static/**/*': (content, variables) => (variables.frontend ? content : null),
}