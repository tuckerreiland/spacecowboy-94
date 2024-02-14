import PostList from "@/lib/components/blog/PostList"
import { serverFetch } from "@/lib/fetch/server-fetch"

export default async function Page() {
	const posts = await serverFetch('posts')
	
	return (
		<div className="h-full">
			<h1>Blog</h1>
			{/* TODO: Figure out how to organize these by collection/tags 
				- I think I'll probably just have to return all collections and tags into a new object, then map over those
				- Either that or I have to get all the collections that have 'blog' as a tag, that's probably the way to go
			*/}
			<PostList posts={posts}/>
		</div>
	)
  }