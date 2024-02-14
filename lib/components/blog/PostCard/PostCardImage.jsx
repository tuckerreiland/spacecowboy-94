import { cn } from "@/lib/utils";

const PostCardImage = ({position, index, title, src, style}) => {
  return (
    <img
        src={src}
        alt={title}
        sizes="100vw"
        className={cn(style,
          'row-start-2',
          // 'lg:col-span-2',
          'w-full',
          'h-auto',
          'rounded-md',
          `${position<=2?'':`lg:row-start-1 lg:col-start-2 lg:col-end-4 ${index%2!==0?'lg:col-start-1 lg:col-end-3':'lg:col-start-2 lg:col-end-4'}`}`
          )}
    >
    </img>
  )
};

export default PostCardImage
