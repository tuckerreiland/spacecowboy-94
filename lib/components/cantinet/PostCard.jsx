'use client';

import React from 'react'

import Link from "next/link"

import CommentCard from "./CommentCard"

// Takes in a post ID as params
export default function PostCard({post}) {
    const [visible, setVisible] = React.useState(false);

	return (
        <div className="w-1/2">
            <Link
                href={`forum/post/${post.postId}`}
            >
               <h2 className="text-2xl">{post.title}</h2>
            </Link>
            <Link
                href={''}
            >
                <h3 className="">{post.author.name}</h3>
            </Link>
            {console.log(post.content.blocks)}
            {post.comments.length>0?
                <div className="">
                    {post.comments.length>1?
                        <button
                            onClick={()=>(visible?setVisible(false):setVisible(true))}
                        >
                            Show {post.comments.length} replies
                        </button>
                    :
                        <button
                            onClick={()=>(visible?setVisible(false):setVisible(true))}
                        >
                            Show {post.comments.length} reply
                        </button>
                    }
                    {visible?
                        <div>
                            {post.comments.map((comment)=>{
                                return(
                                    <CommentCard comment={comment} />
                                )
                            })}
                        </div>
                    :
                        null
                    }
                </div>
           :
                null
            }

        </div>
	)
  }