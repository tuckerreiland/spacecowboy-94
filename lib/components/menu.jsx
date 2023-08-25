import Image from "next/image"

import logo from "../../public/SVG/logo.svg"
import mestenoLogo from "../../public/app-logos/SVG/mesteno-logo.svg"
import Link from "next/link"



export default function Menu() {
    const apps = [
        {
            name:'README.md',
            logo:logo
        }, 
        {
            name:'Shop',
            logo:logo
        }, 
        {
            name:'Contact',
            logo:logo
        }, 
        {
            name:'logbook',
            logo:logo
        }, 
        {
            name:'Docs',
            logo:logo
        }, 
        {
            name:'cantinet',
            logo:logo
        }, 
        {
            name:'videos',
            logo:logo
        }, 
        {
            name:'mesteno',
            logo:mestenoLogo
        }, 
    ]

    return(
        <div className="grid grid-cols-3 grid-rows-5 items-center justify-items-center w-full h-3/4">
            {apps.map((app) => {
                const logoSrc = app.logo
                return(
                    // need to make a desktop button component
                    <div key={app} className="grid items-center justify-items-center h-full w-full hover:bg-[#e5e7eb7a]">
                        <div className="grid items-center justify-items-center h-fit w-fit">
                            <Link
                                href={`/${app.name}`}
                            >
                                <div className="grid items-center justify-items-center h-[100px] w-[100px]">
                                    <Image
                                        src={logoSrc}
                                        width={100}
                                        height={100}
                                        alt={app.name}
                                    />
                                </div>
                            </Link>
                            <h1 className="font-mono">{app.name}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
  
}