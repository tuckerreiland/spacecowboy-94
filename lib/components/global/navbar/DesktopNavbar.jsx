import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

import NavButton from "./NavButton";

const DesktopNavbar = ({style}) => {
  return (
    <div className={cn(styles.desktopNavbar.style, style)}>
        <NavButton
            name='Shop'
            href='/shop'
            style={'w-fit'}
        />
        <NavButton
            name='Blog'
            href='/blog'
            style={'w-fit'}
        />
        <NavButton
            name='Log In'
            href='/log-in'
            style={'w-fit'}
        />
    </div>
  )
};

export default DesktopNavbar
