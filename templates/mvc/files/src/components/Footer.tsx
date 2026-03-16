import { memo } from 'hono/jsx'

export const Footer = memo(() => {
	return (
		<footer className="footer">
			<div className="container">
				<p>
					© {new Date().getFullYear()} HonestJS MVC template. Built with{' '}
					<a href="https://honestjs.dev" target="_blank" rel="noopener noreferrer">
						HonestJS
					</a>
					.
				</p>
			</div>
		</footer>
	)
})
