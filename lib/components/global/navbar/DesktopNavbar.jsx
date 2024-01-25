import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

import NavButton from "./NavButton";

const DesktopNavbar = ({style}) => {
  return (
    <div className={cn(styles.desktopNavbar.style, style)}>
        <NavButton
            name='Shop'
            link='/shop'
            style={'w-fit'}
        />
        <NavButton
            name='Blog'
            link='/blog'
            style={'w-fit'}
        />
        <NavButton
            name='Log In'
            link='/log-in'
            style={'w-fit'}
        />
    </div>
  )
};

export default DesktopNavbar
