import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

import Navbar from "./navbar/Navbar";
import Logo from "./Logo";

const Header = ({style}) => {
  return (
    <header 
        className={cn(styles.header.style, style)}
    >  
        <Logo
            style={''}
            width={50}
            height={50}
        />
        <Navbar/>
    </header>
  )
};

export default Header
