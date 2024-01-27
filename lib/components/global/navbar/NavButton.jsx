import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";
import Link from "next/link";

const NavButton = ({
    children,
    name,
    link,
    style
}) => {

  return (
    <Link
      className={cn(styles.navButton.style, style)}
      href={link}
      >
        {name||children}
    </Link>
  )
};

export default NavButton