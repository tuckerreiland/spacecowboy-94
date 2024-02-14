'use client';
import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";

import Button from "../../global/Button";

const ProductCardActions = ({product}) => {
    const addToCart = async (product) => {
        console.log("Product ID", product)
    }
  return (
    <div
      className={cn(
        'w-full'
      )}
    >
      <Button
        name={'Add to Cart'}
        className={'w-full'}
        action={()=>addToCart(product)}
      />
    </div>
  )
};

export default ProductCardActions
