'use client';
import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";

import Button from "../../global/Button";

const ProductCardActions = ({product}) => {
    const addToCart = async (product) => {
        console.log("Product ID", product)
    }
  return (
    <div>
      <Button
        name={'Add to Cart'}
        action={()=>addToCart(product)}
      />
    </div>
  )
};

export default ProductCardActions
