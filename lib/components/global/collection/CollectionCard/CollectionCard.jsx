import { serverFetch } from "@/lib/fetch/server-fetch";
import ProductList from "../../../shop/ProductList";
import CollectionCardTitle from "./CollectionCardTitle";
import CollectionCardImage from "./CollectionCardImage";

const CollectionCard = async ({collectionSlug}) => {
  const collection = await serverFetch(`collections/${collectionSlug}`)
  return (
    <div>
      <CollectionCardImage title={collection.title} src={'https://placedog.net/300/200'}/>
      <CollectionCardTitle title={collection.title} slug={collectionSlug}/>
      {/* TODO: Make this a product slider, so the top products in the collection can be switched between*/}
      <ProductList products={collection.products}/>
    </div>
  )
};

export default CollectionCard
