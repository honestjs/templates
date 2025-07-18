import { createParamDecorator } from 'honestjs'

export const ClientIP = createParamDecorator('ip', (_, ctx) => {
	const forwardedFor = ctx.req.header('x-forwarded-for')
	const realIP = ctx.req.header('x-real-ip')
	const cfIP = ctx.req.header('cf-connecting-ip')

	const ip = forwardedFor?.split(',')[0].trim() || realIP || cfIP || 'unknown'

	return ip
})
