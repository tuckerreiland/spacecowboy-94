import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

import Button from "../Button";

const DesktopNavbar = ({style}) => {
  return (
    <div className={cn(styles.desktopNavbar, style)}>
        <Button
            name='nav button'
            style={'w-fit'}
        />
        <Button
            name='nav button'
            style={'w-fit'}
        />
        <Button
            name='nav button'
            style={'w-fit'}
        />
    </div>
  )
};

export default DesktopNavbar
