import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

const Footer = ({style}) => {
  return (
    <footer 
        className={cn(styles.footer, style)}
    >
      Footer
    </footer>
  )
};

export default Footer
