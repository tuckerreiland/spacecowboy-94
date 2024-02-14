import HeroBanner from "@/lib/components/global/image/HeroBanner";
import CollectionList from "@/lib/components/global/collection/CollectionList";
import { serverFetch } from "@/lib/fetch/server-fetch";

export default async function Page() {
	const query = {
		tags: [
			'home',
			'new'
		]
	}
	const collections = await serverFetch('collections', query)
	return (
		<div className="h-full w-full">
			<HeroBanner 
				src={'https://placedog.net/1512/824'}
				href={'/'}
				title={'Home Page Banner'}
				content={'Jib lee draft landlubber or just lubber overhaul come about barque barkadeer hulk fore. Splice the main brace furl Brethren of the Coast run a shot across the bow no prey, no pay crimp reef spirits measured fer yer chains topmast. Lanyard cable pressgang gangplank Jack Ketch jack pink provost black jack killick.'}
			/>
			{/* TODO: add path prop so that I can have collections on the home page go to /[slug], collections on the product page go to /shop/collection/[slug] and blog go to /blog/collection/[slug]*/}
			<CollectionList path={'/'} collections={collections}/>
		</div>
	)
  }