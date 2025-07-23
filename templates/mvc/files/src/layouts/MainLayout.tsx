import { Layout, type SiteData } from 'honestjs'
import type { PropsWithChildren } from 'hono/jsx'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const MainLayout = ({ children, stylesheets, scripts, ...props }: PropsWithChildren<SiteData>) => {
	const globalStylesheets: string[] = ['/static/css/main.css']
	const globalScripts: string[] = ['/static/js/main.js']

	return (
		<Layout
			{...props}
			stylesheets={[...globalStylesheets, ...(stylesheets || [])]}
			scripts={[...globalScripts, ...(scripts || [])]}
		>
			<div style="min-height: 100vh; display: flex; flex-direction: column;">
				<Header />
				<main style="flex: 1; padding: 2rem 0;">{children}</main>
				<Footer />
			</div>
		</Layout>
	)
}
