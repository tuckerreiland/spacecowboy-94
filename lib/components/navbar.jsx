'use client';

import Image from "next/image";
import Link from "next/link";

// import {SiInstagram, SiTiktok} from "react-icons/si";

// import NavbarButton from "../buttons/navbarButton";
// import Link from "next/link";
// import MobileNavbar from "./mobileNavbar";

import logo from "../../public/SVG/typelogo.svg"

const Navbar = () => {
	
	return(
		<div className="fixed top-0 z-50 flex w-screen flex-row justify-between items-center bg-gray-300">
			{/* mobile navbar */}
			<div className="xl:hidden">
				{/* <MobileNavbar/> */}
			</div>
			{/* desktop navbar */}
			<div className="w-screen grid grid-cols-2 grid-rows-1 justify-between items-center">
				<div className="h-fit p-2 m-2">
					<Link href={'/'}>
						<Image src={logo} // Route of the image file
							width={100}
							height={100}
							alt={'Company Logo'}
						/>
					</Link>
						
				</div>
				<div className="justify-self-end m-2 p-2">
					<Link href='/sign-in' className="">
						Sign In
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar;