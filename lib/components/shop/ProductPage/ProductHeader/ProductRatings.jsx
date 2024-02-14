import { cn } from "@/lib/utils";
import Link from "next/link";
import { Star } from "lucide-react";

const ProductRatings = ({product}) => {
  return (
    <Link
      className={cn(
        'w-full',
        'flex',
        'items-center',
        'mb-4'
      )}
      href={'#reviews'}
    >
      <div className={cn(
        'flex',
        'relative'
      )}>
        <Star
          size={18}
        />
        <Star
          size={18}
        />
        <Star
          size={18}
        />
        <Star
          size={18}
        />
        <Star
          size={18}
        />
      </div>
      <span>
        {`(${123})`}
      </span>
  </Link>
  )
};

export default ProductRatings
