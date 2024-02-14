import { cn } from "@/lib/utils";


const ProductTitle = ({product}) => {
  return (
    <h1
      className={cn(
        'text-3xl',
        'w-full'
      )}
    >
      {product.name}
    </h1>
  )
};

export default ProductTitle
