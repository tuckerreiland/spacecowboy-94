import { cn } from "@/lib/utils";
import CollectionCard from "./CollectionCard/CollectionCard";

const CollectionList = ({path, collections}) => {
  return (
    <div className={cn(
      'w-screen',
      'grid',
      // 'grid-cols-[repeat(2,1fr)]',
      // 'lg:grid-cols-[repeat(3,1fr)]',
      'grid-cols-2',
      'lg:grid-cols-3',
      'gap-2',
      'px-2',
      'lg:gap-6',
      'lg:px-8',
      'py-20'
    )}>
      {collections.map((collection, index)=> {
        return <CollectionCard path={path} length={collections.length} key={collection.slug} index={index} collectionSlug={collection.slug}/>
      })}
    </div>
  )
};

export default CollectionList
