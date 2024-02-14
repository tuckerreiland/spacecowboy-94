import { cn } from "@/lib/utils";
import Link from "next/link";

const HeroByline = ({className, byline}) => {
  return (
    <div
        className={cn(
            className
        )}
    >
      <p
        className="italic"
      >Written by
        <span> </span>
        <Link
            className='hover:underline'
            href={`blog/${byline.authorSlug}`}
        >
            {byline.author}
        </Link></p>
    </div>
  )
};

export default HeroByline
