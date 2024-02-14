import PostPage from "@/lib/components/blog/PostPage/PostPage"
import { serverFetch } from "@/lib/fetch/server-fetch"

export default async function Page({params}) {
	const { slug } = params
	const post = await serverFetch(`posts/${slug}`)
	console.log('PAGE', slug)
	return (
		<div className="h-full">
			<PostPage post={post}/>
		</div>
	)
  }