import Image from "next/image"
import Link from "next/link"

import PostCard from "../../../../lib/components/forum/PostCard"

// Takes in a post ID as params and the query to fetch the post
export default function Page({postId}) {
    // Post fetch
    // const post = query(postId)
    
	return (
        <div className="grid overflow-hidden w-full h-full items-center">
            <PostCard post={post}/>
            {/* Comments */}
        </div>
	)
  }