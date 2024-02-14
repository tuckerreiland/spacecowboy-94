import { cn } from "@/lib/utils";
import { serverFetch } from "@/lib/fetch/server-fetch";

import PostCardTitle from "./PostCardTitle";
import PostCardImage from "./PostCardImage";
import PostCardTagline from "./PostCardTagline";

import Link from "next/link";

const PostCard = async ({path, postSlug, index, length}) => {
  const post = await serverFetch(`posts/${postSlug}`)
  const mockPost = {
    ...post,
    location:'',
    author:'',
    hero:'https://placedog.net/1512/824',
    tagline:'',
    summary:'',
    // content:{

    // }
}
console.log('Post Card', post)
  mockPost.tagline = 'This is a short tagline of the post to get people interested in whatever the post contains.'
  const position = length-index

  return (
    <Link
      href={`${path}${postSlug}`}
      className={cn(
      'grid',
      `${position<=2?`col-span-1 grid-cols-1 lg:col-start-${4-position}`:'lg:gap-6 col-span-2 lg:col-span-3 grid-cols-[repeat(1,1fr)] lg:grid-cols-[repeat(3,1fr)] lg:grid-rows-1'}`,
      'gap-y-2',
      'w-full',
      'mb-3'
      )}
    >
      <PostCardTitle position={position} index={index} title={mockPost.title} slug={postSlug}/>
      <PostCardImage position={position} index={index} title={mockPost.title} src={'https://placedog.net/300/200'}/>
      <PostCardTagline position={position} index={index} tagline={mockPost.tagline}/>
      {/* TODO: Make this a product slider, so the top products in the post can be switched between*/}
      {/* <ProductList products={post.products}/> */}
    </Link>
  )
};

export default PostCard