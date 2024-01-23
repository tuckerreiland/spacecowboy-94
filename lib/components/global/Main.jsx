import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

const Main = ({children, style}) => {
  return (
    <main
        className={cn(styles.main, style)}
    >
        {children}
    </main>
  )
};

export default Main
