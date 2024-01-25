import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

const Dropdown = ({style}) => {
  return (
    <div 
        className={cn(styles.dropdown.style, style)}
    >
        Dropdown
    </div>
  )
};

export default Dropdown
