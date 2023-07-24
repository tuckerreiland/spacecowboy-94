'use client';

import Image from "next/image";
import Link from "next/link";

// import {SiInstagram, SiTiktok} from "react-icons/si";

// import NavbarButton from "../buttons/navbarButton";
// import Link from "next/link";
// import MobileNavbar from "./mobileNavbar";

import logo from "../../public/SVG/typelogo.svg"

export default function Navbar () {
	
	return(
		<div className="fixed top-0 z-50 flex w-screen flex-row justify-between items-center bg-gray-300">
			{/* mobile navbar */}
			<div className="xl:hidden">
				{/* <MobileNavbar/> */}
			</div>
			{/* desktop navbar */}
			<div className="w-screen flex-row justify-between items-center">
				{/* <ul className="flex flex-row my-1 mx-5 w-1/3 h-fit justify-start">
					<NavbarButton 
						value = ''
						link = "/"
					/>
					<NavbarButton 
						value = ''
						link = "/"
					/>
					<NavbarButton 
						value = ''
						link = "/"
					/>
				</ul> */}
				<div className="h-fit p-2 m-2">
					<Link href={'/'}>
						<Image src={logo} // Route of the image file
							width={144}
							height={144}
							alt={'Company Logo'}
						/>
					</Link>
						
				</div>
				{/* <ul className="flex flex-row my-1 mx-5 w-1/3 h-fit justify-end">
					<Link 
						href='https://www.instagram.com/'
						alt='instagram link'
						className="my-1 lg:mx-5 md:mx-2 p-1 text-lg text-neutral-300 hover:text-white font-mr-eaves-mod font-light tracking-wide"
					>
						<SiInstagram/>
					</Link>
					<Link href='https://www.tiktok.com/@'
					alt='tiktok link'
					className="my-1 lg:mx-5 md:mx-2 p-1 text-lg text-neutral-300 hover:text-white font-mr-eaves-mod font-light tracking-wide"

					>
						<SiTiktok/>
					</Link>
					<NavbarButton 
						value = ''
						link = "/"
					/>
				</ul> */}
			</div>
		</div>
	)
}