document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('user-modal')
	const modalTitle = document.getElementById('modal-title')
	const userForm = document.getElementById('user-form')
	const userIdInput = document.getElementById('user-id')
	const nameInput = document.getElementById('name-input')
	const emailInput = document.getElementById('email-input')
	const addUserBtn = document.getElementById('add-user-btn')
	const closeButton = document.querySelector('.close-button')
	const userListContainer = document.getElementById('user-list-container')

	function showNotification(message, type = 'success') {
		const notification = document.createElement('div')
		notification.className = `notification ${type}`
		notification.innerHTML = `
			<div style="display: flex; align-items: center; gap: 0.5rem;">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					${
						type === 'success'
							? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22,4 12,14.01 9,11.01"></polyline>'
							: '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>'
					}
				</svg>
				${message}
			</div>
		`
		notification.style.cssText = `
			position: fixed;
			top: 20px;
			right: 20px;
			padding: 1rem 1.5rem;
			border-radius: 8px;
			color: white;
			font-weight: 500;
			z-index: 10000;
			animation: slideInRight 0.3s ease;
			box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
			background: ${type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'};
		`

		document.body.appendChild(notification)
		setTimeout(() => {
			notification.style.animation = 'slideOutRight 0.3s ease'
			setTimeout(() => notification.remove(), 300)
		}, 3000)
	}

	const style = document.createElement('style')
	style.textContent = `
		@keyframes slideInRight {
			from { transform: translateX(100%); opacity: 0; }
			to { transform: translateX(0); opacity: 1; }
		}
		@keyframes slideOutRight {
			from { transform: translateX(0); opacity: 1; }
			to { transform: translateX(100%); opacity: 0; }
		}
		.loading-spinner {
			display: inline-block;
			width: 20px;
			height: 20px;
			border: 2px solid rgba(255, 255, 255, 0.3);
			border-radius: 50%;
			border-top-color: white;
			animation: spin 1s ease-in-out infinite;
		}
		@keyframes spin {
			to { transform: rotate(360deg); }
		}
	`
	document.head.appendChild(style)

	function setLoading(button, isLoading) {
		if (isLoading) {
			button.disabled = true
			button.innerHTML = `<div class="loading-spinner"></div> ${button.textContent.includes('Save') ? 'Saving...' : 'Loading...'}`
		} else {
			button.disabled = false
			if (button.id === 'add-user-btn') {
				button.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
						<circle cx="9" cy="7" r="4" />
						<line x1="19" x2="19" y1="8" y2="14" />
						<line x1="22" x2="16" y1="11" y2="11" />
					</svg>
					Add New User
				`
			} else if (button.type === 'submit') {
				button.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
						<polyline points="17,21 17,13 7,13 7,21" />
						<polyline points="7,3 7,8 15,8" />
					</svg>
					Save User
				`
			}
		}
	}

	function openModal(title, user = {}) {
		modalTitle.textContent = title
		userIdInput.value = user.id || ''
		nameInput.value = user.name || ''
		emailInput.value = user.email || ''

		document.querySelectorAll('.form-group').forEach((group) => {
			group.classList.remove('error')
		})

		modal.style.display = 'block'
		setTimeout(() => nameInput.focus(), 100)
	}

	function closeModal() {
		modal.style.display = 'none'
		userForm.reset()
	}

	function validateForm() {
		let isValid = true
		const nameGroup = nameInput.closest('.form-group')
		const emailGroup = emailInput.closest('.form-group')

		nameGroup.classList.remove('error')
		emailGroup.classList.remove('error')

		if (!nameInput.value.trim()) {
			nameGroup.classList.add('error')
			isValid = false
		}

		if (!emailInput.value.trim() || !emailInput.checkValidity()) {
			emailGroup.classList.add('error')
			isValid = false
		}

		return isValid
	}

	addUserBtn.addEventListener('click', () => openModal('Add New User'))
	closeButton.addEventListener('click', closeModal)

	window.addEventListener('click', (event) => {
		if (event.target === modal) {
			closeModal()
		}
	})

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && modal.style.display === 'block') {
			closeModal()
		}
	})

	userForm.addEventListener('submit', async (e) => {
		e.preventDefault()

		if (!validateForm()) {
			showNotification('Please fill in all required fields correctly', 'error')
			return
		}

		const submitBtn = e.target.querySelector('button[type="submit"]')
		setLoading(submitBtn, true)

		const id = userIdInput.value
		const name = nameInput.value.trim()
		const email = emailInput.value.trim()
		const method = id ? 'PUT' : 'POST'
		const url = id ? `/api/v1/users/${id}` : '/api/v1/users'

		try {
			const response = await fetch(url, {
				method,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email })
			})

			const data = await response.json()

			if (response.ok) {
				closeModal()
				showNotification(id ? 'User updated successfully!' : 'User created successfully!')
				setTimeout(() => location.reload(), 1000)
			} else {
				throw new Error(data.message || 'An error occurred')
			}
		} catch (error) {
			console.error('Form submission error:', error)
			showNotification(error.message || 'An error occurred while saving the user', 'error')
		} finally {
			setLoading(submitBtn, false)
		}
	})

	userListContainer.addEventListener('click', async (e) => {
		const target = e.target.closest('button')
		if (!target) return

		const userId = target.dataset.id

		if (target.classList.contains('edit-btn')) {
			const user = {
				id: userId,
				name: target.dataset.name,
				email: target.dataset.email
			}
			openModal('Edit User', user)
		}

		if (target.classList.contains('delete-btn')) {
			const userName = target.closest('.user-card').querySelector('.user-name').textContent

			if (confirm(`Are you sure you want to delete "${userName}"?\n\nThis action cannot be undone.`)) {
				const userCard = document.getElementById(`user-card-${userId}`)
				userCard.classList.add('loading')

				try {
					const response = await fetch(`/api/v1/users/${userId}`, {
						method: 'DELETE'
					})

					if (response.ok) {
						userCard.style.animation = 'slideOutRight 0.3s ease'
						setTimeout(() => {
							userCard.remove()
							showNotification('User deleted successfully!')

							const remainingCards = userListContainer.querySelectorAll('.user-card')
							if (remainingCards.length === 0) {
								setTimeout(() => location.reload(), 1000)
							}
						}, 300)
					} else {
						const error = await response.json()
						throw new Error(error.message || 'Failed to delete user')
					}
				} catch (error) {
					console.error('Delete error:', error)
					showNotification(error.message || 'An error occurred while deleting the user', 'error')
					userCard.classList.remove('loading')
				}
			}
		}
	})
})
