import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

const Navbar = ({style}) => {
  return (
    <div className={cn(styles.navbar, style)}>
      Navbar
    </div>
  )
};

export default Navbar
