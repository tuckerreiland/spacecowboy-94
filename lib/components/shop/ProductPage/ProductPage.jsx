import { cn, formatCurrency } from "@/lib/utils";

import { Star } from "lucide-react";

import Link from "next/link";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductPageActions from "./ProductPageActions/ProductPageActions";



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
  const sizes = [
    {
      name: 'XS',
      quantity: 10
    }, 
    {
      name: 'S',
      quantity: 0
    }, 
    {
      name: 'M',
      quantity: 10
    }, 
    {
      name: 'L',
      quantity: 10
    }, 
    {
      name: 'XL',
      quantity: 10
    }, 
    {
      name: 'XXL',
      quantity: 10
    }, 
  ]
  const productInfo = {
    description:{
      body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
    tech: {
      body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    }
  }

  const heroImage = 'https://placedog.net/600/900'
  const images = [
    'https://placedog.net/200/300',
    'https://placedog.net/200/300',
    'https://placedog.net/200/300',
    'https://placedog.net/200/300'
  ]
  
  return (
    <div 
      className={cn(
        "w-full flex flex-col mx-2 md:mx-6 lg:mx-12 max-w-[calc(100%-16px)] md:max-w-[calc(100%-48px)] lg:max-w-[calc(100%-96px)]"
      )}
    >
      {/* Might need to have a product container/wrapper that handles the flex-col */}
      {/* <ProductHero/>*/}
        <div 
          className="md:flex relative justify-between"
        >
          {/* <ProductImages/> */}
          <div
            className={cn(
              'pt-12'
            )}
          >
          {/* <ProductImageSlider/> */}
            <div className={cn(
              "flex gap-1.5 md:flex-col-reverse lg:flex-row lg:sticky h-fit min-w-fit w-full md:w-2/3 md:pr-8",
              // This top needs to be site header plus ProductHeroImages padding-top
              'top-24'
              )}>
              <div 
                className="hidden md:flex md:flex-row lg:block basis-16 grow shrink-0 lg:max-w-[64px]"
              >
                {images.map((image)=>{
                  return <img
                    className="w-16 md:mr-2 lg:mb-2"
                    src={image}
                    alt={product.name}
                  />
                })
                }
              </div>
              {/* <HeroImage/> */}
              <div
                className={cn(
                  'flex',
                  'w-full',
                  'items-center',
                  'justify-center',
                  'relative',
                  'max-w-[640px]',
                  'm-auto',
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
          </div>
          {/* <ProductInfo/> */}
          <div className={cn(
            'bg-pink-500',
            'lg:max-w-[440px]',
            'min-h-[300px]',
            'w-full',
            'md:w-1/3',
            'lg:pt-12'
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
            <ProductPageActions 
              variants={variants}
              sizes={sizes}
              actions={product.actions}
            />

            <ProductInfo productInfo={productInfo}/>
          </div>
        </div>
    </div>
    
  )
};

export default ProductPage
