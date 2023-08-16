import Image from "next/image"
import Link from "next/link"

import logo from "../../public/mesteno/SVG/hero.svg"

export default function Page() {

	return (
        <div className="grid overflow-hidden w-full h-full items-center">
            <div className="row-start-1 col-start-1 justify-self-center">
                <div className="">
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <p>Paragraph</p>
                </div>
            </div>
        </div>
	)
  }