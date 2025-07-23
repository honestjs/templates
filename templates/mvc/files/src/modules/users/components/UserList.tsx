import type { FC } from 'hono/jsx'
import type { User } from '../models/user.model'

interface UserListProps {
	users: User[]
}

export const UserList: FC<UserListProps> = (props: UserListProps) => {
	return (
		<div className="container">
			<div className="user-list-header">
				<h2>All Users</h2>
				<button id="add-user-btn" className="btn primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
						<circle cx="9" cy="7" r="4" />
						<line x1="19" x2="19" y1="8" y2="14" />
						<line x1="22" x2="16" y1="11" y2="11" />
					</svg>
					Add New User
				</button>
			</div>

			<div id="user-list-container" className="user-list">
				{props.users.length === 0 ? (
					<div className="empty-state">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="64"
							height="64"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							style={{ margin: '0 auto 1rem', opacity: 0.5 }}
						>
							<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
							<circle cx="9" cy="7" r="4" />
							<path d="m22 2-5 10-5-4Z" />
						</svg>
						<h3 style={{ margin: '0 0 0.5rem', color: '#9ca3af', fontSize: '1.25rem' }}>No users yet</h3>
						<p style={{ margin: 0, color: '#d1d5db' }}>Get started by adding your first user</p>
					</div>
				) : (
					props.users.map((user) => (
						<div id={`user-card-${user.id}`} className="user-card" key={user.id}>
							<div className="user-avatar">{user.name.charAt(0).toUpperCase()}</div>
							<div className="user-info">
								<h3 className="user-name">{user.name}</h3>
								{user.email && <p className="user-email">{user.email}</p>}
								{user.role && (
									<div className="user-roles">
										<span className="user-role">{user.role}</span>
									</div>
								)}
							</div>
							<div className="user-actions">
								<button
									className="btn icon-btn edit-btn"
									data-id={user.id}
									data-name={user.name}
									data-email={user.email}
									title="Edit user"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
										<path d="m15 5 4 4" />
									</svg>
								</button>
								<button className="btn icon-btn delete-btn" data-id={user.id} title="Delete user">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M3 6h18" />
										<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
										<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
										<line x1="10" x2="10" y1="11" y2="17" />
										<line x1="14" x2="14" y1="11" y2="17" />
									</svg>
								</button>
							</div>
						</div>
					))
				)}
			</div>

			<div id="user-modal" className="modal">
				<div className="modal-content">
					<div className="modal-header">
						<h2 id="modal-title">Add User</h2>
						<span className="close-button">&times;</span>
					</div>
					<div className="modal-body">
						<form id="user-form">
							<input type="hidden" id="user-id" />
							<div className="form-group">
								<label htmlFor="name-input">Full Name</label>
								<input type="text" id="name-input" placeholder="Enter full name" required />
							</div>
							<div className="form-group">
								<label htmlFor="email-input">Email Address</label>
								<input type="email" id="email-input" placeholder="Enter email address" required />
							</div>
							<div className="form-actions">
								<button
									type="button"
									className="btn"
									style={{ background: '#e5e7eb', color: '#6b7280' }}
									onclick="document.getElementById('user-modal').style.display='none'"
								>
									Cancel
								</button>
								<button type="submit" className="btn primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
										<polyline points="17,21 17,13 7,13 7,21" />
										<polyline points="7,3 7,8 15,8" />
									</svg>
									Save User
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
