import Image from "next/image"
import Link from "next/link"

import logo from "../../public/next.svg"

export default function Page() {

	return (
        <div className="grid overflow-hidden w-full h-full items-center bg-yellow-100">
            <div className="row-start-1 col-start-1 justify-self-center">
                <Link
                    href={'/'}
                >
                    <Image
                        src={logo}
                        width={500}
                        height={500}
                        alt="asdf"
                    />
                    <h1 className="font-mono text-3xl">Second Page</h1>
                </Link>
            </div>
        </div>
	)
  }