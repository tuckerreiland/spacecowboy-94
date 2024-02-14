'use client';
import { cn } from "@/lib/utils";
import { useState } from "react";
import Thumbnails from "./Thumbnails";
import HeroImage from "../HeroImage";
import HeroImageContainer from "../HeroImageContainer";
import ImageSwiper from "./ImageSwiper";

const ImageCarousel = ({images, product}) => {
    const [activeImage, setActiveImage] = useState(0)
  return (
    <div
      className={cn(
        'pt-12',
        'w-full',
        // 'overflow-hidden'
      )}
    >
      <div className={cn(
        "hidden md:flex md:flex-col-reverse lg:flex-row gap-1.5 lg:sticky h-fit min-w-fit w-full md:pr-8",
        // This top needs to be site header plus ProductHeroImages padding-top
        'top-24'
        )}>
        
        <Thumbnails
          images={images}
          product={product}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
        <HeroImageContainer>
          <HeroImage
            width="810"
            height="1080"
            src={images[activeImage]}
            alt={`${product.name} - Image ${activeImage}`}
          />
        </HeroImageContainer>
      </div>
      <ImageSwiper
        className={cn(
         'block',
         'md:hidden',
        //  'w-fit',
         'max-h-[calc(75vh)]'
        )}
        images={images}
        product={product}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </div>
  )
};

export default ImageCarousel
