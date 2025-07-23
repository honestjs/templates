import { memo } from 'hono/jsx'

export const Footer = memo(() => {
	return (
		<footer className="footer">
			<div className="container">
				<p>© {new Date().getFullYear()} Company. All rights reserved.</p>
			</div>
		</footer>
	)
})
