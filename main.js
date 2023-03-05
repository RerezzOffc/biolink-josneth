import './style.css'
import './reset.css'

const toggleTheme = document.getElementById('toggleTheme')

let theme = localStorage.theme || ''

if (!localStorage.theme) {
	theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

document.documentElement.classList.add(theme)

const changeTheme = () => {
	if (theme === 'light') {
		theme = 'dark'
		document.documentElement.classList.remove('light')
		document.documentElement.classList.add(theme)
		localStorage.theme = theme
		return
	}

	if (theme === 'dark') {
		theme = 'light'
		document.documentElement.classList.remove('dark')
		document.documentElement.classList.add(theme)
		localStorage.theme = theme
		return
	}
}

toggleTheme.addEventListener('click', changeTheme)
