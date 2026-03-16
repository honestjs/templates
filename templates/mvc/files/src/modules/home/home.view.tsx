import { Ctx, Page, View } from 'honestjs'
import type { Context } from 'hono'

@View('')
class HomeView {
	@Page()
	index(@Ctx() ctx: Context) {
		return ctx.render(
			<div className="container home-page">
				<h2 className="home-title">MVC Template</h2>
				<p className="home-intro">
					A minimal HonestJS app with server-rendered views and a REST API. This example shows the full stack:
					views for pages, controllers for API, and services for business logic.
				</p>
				<section className="home-section">
					<h3 className="home-section-title">Pages</h3>
					<ul className="home-list">
						<li>
							<a href="/users">Users</a> — CRUD interface with add, edit, delete
						</li>
					</ul>
				</section>
				<section className="home-section">
					<h3 className="home-section-title">API Endpoints</h3>
					<pre className="home-api-pre">
{`GET    /api/v1/users      — List all users
GET    /api/v1/users/:id   — Get one user
POST   /api/v1/users      — Create user
PUT    /api/v1/users/:id   — Update user
DELETE /api/v1/users/:id   — Delete user`}
					</pre>
				</section>
			</div>,
			{
				title: 'HonestJS MVC',
				description: 'Minimal MVC template with views and REST API'
			}
		)
	}
}

export default HomeView
