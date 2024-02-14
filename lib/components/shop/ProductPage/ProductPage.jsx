import { cn } from "@/lib/utils";
import Link from "next/link";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductPageActions from "./ProductPageActions/ProductPageActions";
import ImageCarousel from "../../global/image/ImageCarousel/ImageCarousel";
import ProductHeader from "./ProductHeader/ProductHeader";



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

  const heroImage = 'https://placekitten.com/600/900'
  const images = [
    'https://placekitten.com/810/1080',
    'https://placekitten.com/810/1080',
    'https://placekitten.com/810/1080',
    'https://placekitten.com/810/1080'
  ]
  console.log('Product Page', product)
  return (
    <div 
      className={cn(
        "w-full flex flex-col md:mx-6 lg:mx-12 lg:mx-24 max-w-screen md:max-w-[calc(100%-48px)] lg:max-w-[calc(100%-96px)] xl:max-w-[calc(100%-192px)]"
      )}
    >
        <div 
          className="md:flex relative justify-between"
        >
          <ImageCarousel images={images} product={product}/>
          <div className={cn(
            'bg-pink-500',
            'lg:max-w-[440px]',
            'min-h-[300px]',
            'w-full',
            'md:w-1/2',
            'lg:w-1/3',
            'md:pt-12'
          )}>
          <div
            className={cn(
              'pt-4',
              'md:pt-0',
              'px-[2.5vw]',
              'md:px-0',
            )}
          >
            <ProductHeader product={product}/>
            <ProductPageActions 
              variants={variants}
              sizes={sizes}
              actions={product.actions}
            />
            <ProductInfo productInfo={productInfo}/>
          </div>
          </div>
        </div>
    </div>
  )
};

export default ProductPage
