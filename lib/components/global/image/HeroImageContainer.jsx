import { cn } from "@/lib/utils";

const HeroImageContainer = ({children, className}) => {
  return (
    <div
        className={cn(
        'md:flex',
        'w-full',
        'md:items-center',
        'justify-center',
        'relative',
        'md:max-w-[640px]',
        'md:m-auto',
        className
        )}
    >
      {children}
    </div>
  )
};

export default HeroImageContainer
