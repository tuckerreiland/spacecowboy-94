import { cn } from "@/lib/utils";

const ProductVariants = ({variants, selectedVariant, setSelectedVariant}) => {
  return (
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
  )
};

export default ProductVariants
