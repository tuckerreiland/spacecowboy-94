
import CollectionList from "@/lib/components/global/collection/CollectionList"
import { serverFetch } from "@/lib/fetch/server-fetch"

export default async function Page() {
	const collections = await serverFetch('collections')
	return (
		<div className="h-full w-full">
			<h1>Shop</h1>
			<CollectionList collections={collections}/>
		</div>
	)
  }