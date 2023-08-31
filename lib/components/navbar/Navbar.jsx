import Image from "next/image";
import Link from "next/link";

// import {SiInstagram, SiTiktok} from "react-icons/si";

// import NavbarButton from "../buttons/navbarButton";
// import Link from "next/link";
// import MobileNavbar from "./mobileNavbar";

import logo from "../../../public/SVG/typelogo.svg"
import { getAuthSession } from "../../helpers/auth";
import UserAccountNav from "./UserAccountNav";
import MenuButton from "./MenuButton";

const Navbar = async () => {
	
	const session = await getAuthSession()

	return(
		<div className="fixed top-0 z-50 max-h-12 px-[5px] py-[5px] grid w-screen flex-row justify-between items-center bg-gray-300">
			{/* mobile navbar */}
			<div className="xl:hidden">
				{/* <MobileNavbar/> */}
			</div>
			{/* desktop navbar */}
			<div className="w-screen grid grid-cols-2 grid-rows-1 justify-between justify-self-start items-start">
				<div className="h-full max-h-12 items-center">
					<Link 
						href={'/'}
					>
						<Image src={logo} // Route of the image file
							width={100}
							height={100}
							alt={'Company Logo'}
						/>
					</Link>
						
				</div>
				<div className="justify-self-end pr-[9px]">
					{session?.user?
						<UserAccountNav user={session.user}/>
					:
						<div>
							<MenuButton
								name={'Sign Up'}
								link={'/sign-up'}
								style={'px-[4px] py-[2px]'}/>
							<MenuButton
								name={'Log In'}
								link={'/log-in'}
								style={'px-[4px] py-[2px]'}/>
						</div>
						
					}
					
				</div>
			</div>
		</div>
	)
}

export default Navbar;