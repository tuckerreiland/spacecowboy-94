import ProductPage from "@/lib/components/shop/ProductPage/ProductPage"
import { serverFetch } from "@/lib/fetch/server-fetch"

export default async function Page({params}) {
	const { slug } = params
	const product = await serverFetch(`products/${slug}`)
	return (
		<ProductPage
			product={product}
			style={''}
		/>
	)
  }