import { cn } from "@/lib/utils";

import ProductPrice from "./ProductPrice";
import ProductRatings from "./ProductRatings";
import ProductTitle from "./ProductTitle";

const ProductHeader = ({product}) => {
  return (
    <div className={cn(
      'flex',
      'justify-between',
      'items-start',
      'w-full',
      'mb-6'
    )}>
      <div className={cn(
            'w-full'
          )}>
        {/* TODO: only pass necessary proprs, not the whole product */}
        <ProductTitle product={product}/>
        <ProductRatings product={product}/>
        <ProductPrice product={product}/>
      </div>
    </div>
  )
};

export default ProductHeader
