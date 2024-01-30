import { serverFetch } from "@/lib/fetch/server-fetch";
import ProductList from "../../../shop/ProductList";
import CollectionCardTitle from "./CollectionCardTitle";
import CollectionCardImage from "./CollectionCardImage";
import { cn } from "@/lib/utils";
import CollectionCardDescription from "./CollectionCardDescription";
import Link from "next/link";

const CollectionCard = async ({collectionSlug, index, length}) => {
  const collection = await serverFetch(`collections/${collectionSlug}`)

  const position = length-index

  return (
    /**
     * TODO: make the collection list a grid element again
     * Control col-span on Collection card, that way the logic and functionality is succcinct and not in multiple elements
     */
    <Link
      href={`/shop/collection/${collectionSlug}`}
      className={cn(
      'grid',
      `${position<=2?`col-span-1 grid-cols-1 lg:col-start-${4-position}`:'lg:gap-6 col-span-2 lg:col-span-3 grid-cols-[repeat(1,1fr)] lg:grid-cols-[repeat(3,1fr)] lg:grid-rows-1'}`,
      'gap-y-2',
      'w-full',
      'mb-3'
      )}
    >
      <CollectionCardTitle position={position} index={index} title={collection.title} slug={collectionSlug}/>
      <CollectionCardImage position={position} index={index} title={collection.title} src={'https://placedog.net/300/200'}/>
      <CollectionCardDescription position={position} index={index}/>
      {/* TODO: Make this a product slider, so the top products in the collection can be switched between*/}
      {/* <ProductList products={collection.products}/> */}
    </Link>
  )
};

export default CollectionCard
