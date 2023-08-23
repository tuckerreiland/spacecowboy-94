import Link from "next/link"
import Image from "next/image"
import TileOverlay from "../lib/effects/transitions/TileOverlay/TileOverlay";

import logo from "../public/SVG/logo-scanlines.svg"
import Menu from "../lib/components/menu";

export default function Page() {

	const grid = {
		rows:[1,2,3,4,5,6,7,8,9,10],
		cols:[1,2,3,4,5,6,7,8,9,10]
	}

	return (
		<div className="grid row-start-1 col-start-1 overflow-hidden w-full h-full items-center bg-yellow-100">
			<TileOverlay grid={grid}/>
			<div className="row-start-1 col-start-1 justify-self-start z-10 w-1/3 h-full "> 
				<Menu/>
			</div>
			<div className="row-start-1 col-start-1 justify-self-center">
				<Image
					src={logo}
					width={500}
					height={500}
					alt="asdf"
				/>
				<h1 className="font-mono italic text-3xl">Hello World!</h1>
			</div>
		</div>
	)
  }