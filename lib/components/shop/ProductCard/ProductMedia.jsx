import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";


const ProductMedia = ({src}) => {
  return (
    <div 
        className={cn(
          'relative',
          'mb-4',

        )}
      >
        <img
            src={src?src:'https://placedog.net/584/784'}
            // sizes="100vw"
            width='588'
            height='784'
            className={cn(
              'w-full',
              'max-w-full',
              'h-auto',
              'overflow-clip',
              'align-middle',
              'aspect-ration-[3/4]',
              'object-contain',
              '[overflow-clip-margin: content-box;]',
              'rounded-md',
            )}
          />
      </div>
  )
};

export default ProductMedia
