import { memo } from 'hono/jsx'

export const Header = memo(() => {
	return (
		<header className="header">
			<div className="container">
				<h1>
					<a href="/">HonestJS</a>
				</h1>
				<nav>
					<a href="/">Home</a>
					<a href="/users">Users</a>
				</nav>
			</div>
		</header>
	)
})
