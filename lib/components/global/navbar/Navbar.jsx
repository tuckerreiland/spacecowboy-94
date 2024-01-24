import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = ({style}) => {
  const navbar = [
    'Nav Link',
    'Nav Link',
    'Nav Link',
    'Nav Link',
  ]
  return (
    <div className={cn(styles.navbar, style)}>
        <MobileNavbar
          style={'md:hidden'}
        />
        <DesktopNavbar
          style={'hidden md:grid'}
        />
    </div>
  )
};

export default Navbar
