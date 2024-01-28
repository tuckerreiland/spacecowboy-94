import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";

import Image from "next/image";

const ProductMedia = ({src}) => {
  return (
    <div 
        className={cn(styles.productCardImage.style,
          'flex',
          'w-full',
          'items-center',
          'justify-center',
          'relative'
        )}
      >
        <img
            src={src?src:'https://placedog.net/300/200'}
            sizes="100vw"
            className={cn(
              'w-full',
              'h-auto'
            )}
          />
      </div>
  )
};

export default ProductMedia
