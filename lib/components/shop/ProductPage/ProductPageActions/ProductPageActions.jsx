'use client';
import { cn } from "@/lib/utils";

import Button from "../../../global/Button";
import { useState } from "react";
import ProductSizes from "./ProductSizes";
import ProductVariants from "./ProductVariants";

const ProductPageActions = ({variants, sizes, actions}) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0].name)
  const [selectedSize, setSelectedSize] = useState('')
  
  const addToCart = () => {
    if (variants && !selectedVariant){
      return console.log(`Please select a ${'Variant Name'}`)
    }
    if (sizes && !selectedSize){
      return console.log(`Please select a ${'Size Name'}`)
    }
    if (selectedVariant==='Unavailable'){
      return console.log(`Selected ${'Variant Name'} is unavailable`)
    }
    if (selectedSize==='Unavailable'){
      return console.log(`Selected ${'Variant Name'} is unavailable`)
    }

    return console.log(`${selectedVariant}-${selectedSize} added to cart.`)
  }
  return (
    <div>
      {variants && <ProductVariants variants={variants} selectedVariant={selectedVariant} setSelectedVariant={setSelectedVariant}/>}      
      {sizes && <ProductSizes sizes={sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>}
      <Button
        className={cn(
            'w-full',
            'bg-teal-500',
            'rounded',
            'mb-3',
            'py-4',
            'px-5'
        )}
        name={'Add To Cart'}
        action={()=>addToCart()}
        />
    </div>
  )
};

export default ProductPageActions
