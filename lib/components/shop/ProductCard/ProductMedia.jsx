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
        <Image
            src={src?src:'https://placedog.net/300/200'}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
      </div>
  )
};

export default ProductMedia
