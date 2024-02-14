import { cn } from "@/lib/utils";

const Thumbnails = ({images, product, activeImage, setActiveImage}) => {
  return (
    <div 
        className="hidden md:flex md:flex-row lg:block basis-16 grow shrink-0 lg:max-w-[64px]"
    >
        {images.map((image, index)=>{
        return <img
            className={cn(
            'w-10',
            'h-auto',
            'md:mr-2',
            'lg:mb-2',
            'cursor-pointer',
            'rounded-sm',
            `${index===activeImage?'opacity-75':null}`
            )}
            width='90'
            height='120'
            src={image}
            alt={product.name}
            onClick={()=>activeImage!==index?setActiveImage(index):null}
        />
        })
        }
    </div>
  )
};

export default Thumbnails
