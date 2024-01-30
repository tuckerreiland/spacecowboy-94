import CollectionPage from "@/lib/components/global/collection/CollectionPage/CollectionPage"
import ProductList from "@/lib/components/shop/ProductList"
import { serverFetch } from "@/lib/fetch/server-fetch"

export default async function Page({params}) {
    const {slug} = params
    // TODO: Fetch collection, include products
	const collection = await serverFetch(`collections/${slug}`)
	return (
		<div className="h-full w-full">
			<CollectionPage collection={collection}/>
		</div>
	)
  }