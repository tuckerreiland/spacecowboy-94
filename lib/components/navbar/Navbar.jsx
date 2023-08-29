import Image from "next/image";
import Link from "next/link";

// import {SiInstagram, SiTiktok} from "react-icons/si";

// import NavbarButton from "../buttons/navbarButton";
// import Link from "next/link";
// import MobileNavbar from "./mobileNavbar";

import logo from "../../../public/SVG/typelogo.svg"
import { getAuthSession } from "../../helpers/auth";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
	
	const session = await getAuthSession()

	return(
		<div className="fixed top-0 z-50 max-h-12 px-[10px] py-[10px] flex w-screen flex-row justify-between items-center bg-gray-300">
			{/* mobile navbar */}
			<div className="xl:hidden">
				{/* <MobileNavbar/> */}
			</div>
			{/* desktop navbar */}
			<div className="w-screen grid grid-cols-2 grid-rows-1 justify-between items-center">
				<div className="h-fit">
					<Link href={'/'}>
						<Image src={logo} // Route of the image file
							width={100}
							height={100}
							alt={'Company Logo'}
						/>
					</Link>
						
				</div>
				<div className="justify-self-end">
					{session?.user?
						<UserAccountNav user={session.user}/>
					:
						<div>
							<Link href='/sign-up' className="">
								Sign Up
							</Link>
							<Link href='/log-in' className="">
								Log In
							</Link>
						</div>
						
					}
					
				</div>
			</div>
		</div>
	)
}

export default Navbar;