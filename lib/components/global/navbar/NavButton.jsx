import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";
import Link from "next/link";

const NavButton = ({
    children,
    name,
    href,
    style
}) => {

  return (
    <Link
      className={cn(styles.navButton.style, style)}
      href={href}
      >
        {name||children}
    </Link>
  )
};

export default NavButton