import ProductList from "@/lib/components/shop/ProductList"
import { serverFetch } from "@/lib/fetch/server-fetch"

export default async function Page() {
	const products = await serverFetch('products')
	return (
		<div className="h-full w-full">
			<h1>Shop</h1>
			<ProductList products={products}/>
		</div>
	)
  }