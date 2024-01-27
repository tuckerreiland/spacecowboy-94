import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

const Main = ({children, style}) => {
  return (
    <main
        className={cn(styles.main.style, style, 'h-full min-h-screen')}
    >
        {children}
    </main>
  )
};

export default Main
