import CollectionCard from "./CollectionCard/CollectionCard";

const CollectionList = ({collections}) => {
    console.log('collections', collections)
  return (
    <div>
      {collections.map((collection)=> {
        return <CollectionCard collectionSlug={collection.slug}/>
      })}
    </div>
  )
};

export default CollectionList
