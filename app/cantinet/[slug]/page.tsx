import { FC } from 'react'
import { getAuthSession } from '../../../lib/helpers/auth'
import { db } from '../../../lib/helpers/db'
import { INFINITE_SCROLLING_PAGINATION_RESULTS } from '../../../config'
import { notFound } from 'next/navigation'
import MiniCreatePost from '../../../lib/components/cantinet/post/MiniCreatePost'
import PostCard from '../../../lib/components/cantinet/PostCard'

// TODO: Rename file and refactor with space cowboy/cantinet proper terminology

interface PageProps {
  params: {
    slug: string
  }
}

const page: FC<PageProps> = async ({params}: PageProps) => {
    const { slug } = params 

    const session = await getAuthSession()

    const subreddit = await db.subreddit.findFirst({
        where: { name: slug },
        include: {
            posts: {
                include: {
                    author: true,
                    votes: true,
                    comments: true,
                    subreddit: true,
                }, 

                take: INFINITE_SCROLLING_PAGINATION_RESULTS
            }
        }
    })

    // TODO: Configure not found
    if (!subreddit) return notFound()
    return (
        <div>
            <h1>cantinet/{subreddit.name}</h1>
            <MiniCreatePost session={session}/>
            {subreddit.posts.map((post)=>{
                console.log(post)
                return <PostCard post={post}/>
            })}
        </div>
    )
}

export default page