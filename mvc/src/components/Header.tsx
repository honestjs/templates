import { memo } from 'hono/jsx'

export const Header = memo(() => {
	return (
		<header className="header">
			<div className="container">
				<h1>Honest.js MVC</h1>
			</div>
		</header>
	)
})
