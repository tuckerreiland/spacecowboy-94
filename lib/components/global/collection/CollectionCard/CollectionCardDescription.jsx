import { cn } from "@/lib/utils";

const CollectionCardDescription = ({position, index}) => {

  return (
    <div
      className={cn(
        'col-end-auto',
        'row-start-3',
        // 'lg:row-start-1',
        // 'lg:col-start-1',
        // 'col-span-2',
        // 'lg:col-span-1',
        // 'lg:self-end'
        `${position<=2?'':`lg:row-start-1 cols-span-2 lg:col-span-1 lg:self-end ${index%2!==0?'lg:col-start-3':'lg:col-start-1 text-right'}`}`
      )}
    >
      CollectionCardDescription
    </div>
  )
};

export default CollectionCardDescription
