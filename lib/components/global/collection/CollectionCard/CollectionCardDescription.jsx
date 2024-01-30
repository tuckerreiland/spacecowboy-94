import { cn } from "@/lib/utils";
const CollectionCardDescription = ({position, index, description, href}) => {

  return (
    <p
      className={cn(
        'col-end-auto',
        'row-start-3',
        'flex',
        'flex-col',
        'lg:w-2/3',
        `${position<=2?'':`lg:row-start-1 cols-span-2 lg:col-span-1 lg:self-end ${index%2!==0?'lg:col-start-3':'lg:col-start-1 place-self-end text-right'}`}`
      )}
    >
        {description}
      </p>
  )
};

export default CollectionCardDescription
