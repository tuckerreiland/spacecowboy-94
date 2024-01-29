import { cn } from "@/lib/utils";

const ProductSizes = ({sizes, selectedSize, setSelectedSize}) => {
  return (
    <div
        className={cn(
            'my-5'
        )}
        >
        <span>
            {selectedSize||'Select a size'}
        </span>
        <div
            className={cn(
            'my-2',
            'flex',
            'flex-wrap',
            'justify-start',
            )}
        >
            {sizes.map((size)=>{
            return (
                <label
                onClick={()=>setSelectedSize(size.quantity===0?'Unavailable':size.name)}
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
                    `${selectedSize===size.name?'border-opacity-100':'border-opacity-0 hover:border-opacity-50'}`
                    )}
                >
                    <span
                    className={cn(
                        'w-8',
                        'h-8',
                        'text-center',
                        'rounded-sm',
                        'flex',
                        'justify-center',
                        'items-center'
                    )}
                    >
                    <p
                        className={cn(
                        'w-fit',
                        'h-fit',
                        `${size.quantity===0?'opacity-50':'opacity-100'}`
                        )}
                    >
                        {size.name}
                    </p>
                    </span>
                </span>
                </label>
            )
            })}
        </div>
    </div>
  )
};

export default ProductSizes
