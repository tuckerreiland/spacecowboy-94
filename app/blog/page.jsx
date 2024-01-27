import { serverFetch } from "@/lib/fetch/server-fetch"

export default async function Page() {
	const posts = await serverFetch('posts')
	return (
		<div className="h-full">
			<h1>Blog</h1>
		</div>
	)
  }