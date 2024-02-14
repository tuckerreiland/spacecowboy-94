import { cn } from "@/lib/utils";

import PostCard from "./PostCard/PostCard";

const PostList = ({posts, className}) => {
  console.log('POST LIST', posts)
    return (
      <div className={cn(
        'w-screen',
        'grid',
        // 'grid-cols-[repeat(2,1fr)]',
        // 'lg:grid-cols-[repeat(3,1fr)]',
        'grid-cols-2',
        'lg:grid-cols-3',
        'gap-2',
        'px-2',
        'lg:gap-6',
        'lg:px-8',
        'py-20'
      )}>
        {posts.map((post, index)=> {
          return <PostCard path={'/blog/'} length={posts.length} key={post.slug} index={index} postSlug={post.slug}/>
        })}
      </div>
    )
};

export default PostList
