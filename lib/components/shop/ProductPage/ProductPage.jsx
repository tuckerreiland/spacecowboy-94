'use client';
import { cn, formatCurrency } from "@/lib/utils";

import { Star } from "lucide-react";

import Link from "next/link";
import Button from "../../global/Button";
import { useState } from "react";



const ProductPage = ({product, style}) => {
  const variants = [
    {
      name:'Variant 1',
      slug: 'variant-1',
      image: 'https://placedog.net/100/100'
    },
    {
      name:'Variant 2',
      slug: 'variant-2',
      image: 'https://placedog.net/100/100'
    },
    {
      name:'Variant 3',
      slug: 'variant-3',
      image: 'https://placedog.net/100/100'
    },
    {
      name:'Variant 4',
      slug: 'variant-4',
      image: 'https://placedog.net/100/100'
    },
    {
      name:'Variant 5',
      slug: 'variant-5',
      image: 'https://placedog.net/100/100'
    },
    {
      name:'Variant 6',
      slug: 'variant-6',
      image: 'https://placedog.net/100/100'
    },
    {
      name:'Variant 7',
      slug: 'variant-7',
      image: 'https://placedog.net/100/100'
    },
    {
      name:'Variant 8',
      slug: 'variant-8',
      image: 'https://placedog.net/100/100'
    },
    {
      name:'Variant 9',
      slug: 'variant-9',
      image: 'https://placedog.net/100/100'
    },
    {
      name:'Variant 10',
      slug: 'variant-10',
      image: 'https://placedog.net/100/100'
    },
    {
      name:'Variant 11',
      slug: 'variant-11',
      image: 'https://placedog.net/100/100'
    },
    {
      name:'Variant 12',
      slug: 'variant-12',
      image: 'https://placedog.net/100/100'
    },
  ]
  const [selectedVariant, setSelectedVariant] = useState(variants[0].name)

  const heroImage = 'https://placedog.net/600/900'
  const images = [
    'https://placedog.net/200/300',
    'https://placedog.net/200/300',
    'https://placedog.net/200/300',
    'https://placedog.net/200/300'
  ]
  
  return (
    <div 
      className="w-full flex flex-col mx-12 max-w-[calc(100%-96px)]"
    >
      {/* Might need to have a product container/wrapper that handles the flex-col */}
      {/* <ProductHero/>*/}
        <div 
          className="flex relative justify-between"
        >
          {/* <ProductImageSlider/> */}
            <div className="flex gap-1.5 flex-row sticky min-w-fit w-2/3 pr-8">
              <div 
                className="basis-16 grow shrink-0 max-w-16"
              >
                {images.map((image)=>{
                  return <img
                    className="w-9 mb-2"
                    src={image}
                    alt={product.name}
                  />
                })
                }
              </div>
              <div
                className={cn(
                  // 'basis-auto',
                  'flex',
                  'w-full',
                  'items-center',
                  'justify-center',
                  'relative'
                )}
              >
                <img
                  sizes="100vw"
                  className={cn(
                    'w-full',
                    'h-auto'
                  )}
                  src={heroImage}
                  alt={product.name}
                />
              </div>
            </div>
          {/* <ProductInfo/> */}
          <div className={cn(
            'bg-pink-500',
            'max-w-[440px]',
            'min-h-[300px]',
            'w-1/3'
          )}>
            {/* <ProductHeader/> */}
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
                {/* <ProductTitle/> */}
                <h1
                  className={cn(
                    'text-3xl',
                    'w-full'
                  )}
                >
                  {product.name}
                </h1>
                {/* <Ratings/> */}
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
                        {`(${product.reviews||123})`}
                      </span>
                    </Link>
                {/* <Price/> */}
                <p
                  className={cn(
                    'mb-3'
                  )}
                >{formatCurrency(product.price)}</p>
              </div>
            </div>
            {/* product.variants&&<ProductVariants/> */}
              <div
                className={cn(
                  'my-5'
                )}
              >
                <span>
                  {selectedVariant||'No Variant selected'}
                </span>
                <div
                  className={cn(
                    'my-2',
                    'flex',
                    'flex-wrap',
                    'justify-start'
                  )}
                >
                  {variants.map((variant)=>{
                    return (
                      <label
                        onClick={()=>setSelectedVariant(variant.name)}
                        className={cn(
                          'mb-1.5',
                          'mr-1.5',
                          'basis-auto',
                          'grow-0',
                          'shrink'
                        )}
                      >
                        <span
                          className={cn(
                            'p-[3px]',
                            'w-10',
                            'h-10',
                            'block',
                            'rounded',
                            'border-[1px]',
                            'border-green-500',
                            `${selectedVariant===variant.name?'border-opacity-100':'border-opacity-0 hover:border-opacity-50'}`
                          )}
                        >
                          <span
                            className={cn(
                              'block',
                              'w-8',
                              'h-8',
                              'overflow-hidden',
                              'bg-auto',
                              'bg-repeat',
                              'bg-origin-padding',
                              'bg-clip-border',
                              'bg-scroll',
                              'bg-none',
                              'rounded-sm',
                              
                            )}
                          >
                            <img 
                              sizes="100vw"
                              className={cn(
                                'inline',
                                'relative',
                                'object-cover',
                                'overflow-clip',
                                '[overflow-clip-margin: border-box;]',
                                'aspect-auto',
                                'object-left-top',
                                'max-w-none'
                              )}
                              src={variant.image} 
                              alt={variant.name} 
                            />
                          </span>
                        </span>
                      </label>
                    )
                  })}
                </div>
              </div>
            {/* product.sizes&&<ProductSizes/> */}
            {/* <ProductPageActions/> */}
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
                action={console.log('Add To Cart')}
              />
            {/* <ProductInfo/> */}
                <div>
                  {/* <ProductInfoSection/> */}
                  <div>

                  </div>
                </div>
          </div>
        </div>
    </div>
    
  )
};

export default ProductPage
