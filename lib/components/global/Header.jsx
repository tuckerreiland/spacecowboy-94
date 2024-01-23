import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

import Navbar from "./Navbar";

const Header = ({style}) => {
  return (
    <header 
        className={cn(styles.header, style)}
    >
      <Navbar/>
    </header>
  )
};

export default Header
