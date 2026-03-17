import { createParamDecorator } from 'honestjs'
import { getConnInfo } from 'hono/bun'

export const ClientIP = createParamDecorator('ip', (_, ctx) => {
	const forwardedFor = ctx.req.header('x-forwarded-for')
	const realIP = ctx.req.header('x-real-ip')
	const cfIP = ctx.req.header('cf-connecting-ip')

	// Prefer proxy headers (for requests behind nginx, load balancers, Cloudflare)
	const fromHeaders = forwardedFor?.split(',')[0].trim() || realIP || cfIP
	if (fromHeaders) return fromHeaders

	// Fallback to platform connection info
	try {
		const connInfo = getConnInfo(ctx)
		return connInfo?.remote?.address ?? 'unknown'
	} catch {
		return 'unknown'
	}
})
