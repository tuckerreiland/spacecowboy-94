import { cn } from "@/lib/utils";

const HeroImage = ({width, height, src, alt, className}) => {
  return (
        <img
        width={width}
        height={height}
        sizes="100vw"
        className={cn(
            'w-full',
            'h-auto',
            'rounded-md',
            className
        )}
        src={src}
        alt={alt}
        />
  )
};

export default HeroImage
