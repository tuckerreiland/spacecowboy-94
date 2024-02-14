import { cn } from "@/lib/utils";

const PostCardTitle = ({position, index, title}) => {
  return (
    <h2
      className={cn(
        'text-2xl',
        'lg:row-start-1',
        'lg:col-start-1',
        'col-span-2',
        `${position<=2?'':`lg:col-span-1 ${index%2!==0?'lg:col-start-3 text-right':''}`}`
      )}
    >
      {title}
    </h2>
  )
};

export default PostCardTitle
