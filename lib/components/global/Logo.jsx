import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

import Image from "next/image";

import logo from '../../../public/mesteno/SVG/logo.svg'

console.log(logo)
const Logo = ({style, width, height}) => {
  return (
    <div
        className={cn(styles.logo, style)}
    >
        <Image
            src={logo.src}
            width={width?width:logo.width}
            height={height?height:logo.height}
        />
    </div>
  )
};

export default Logo
