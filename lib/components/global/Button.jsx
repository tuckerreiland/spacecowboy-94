/**
 TODO:
    - Handle 'selected', 'active' state
 */
import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";
import { Link } from "lucide-react";

const Button = ({
    children,
    name,
    action,
    form,
    style
}) => {

  return (
    <button
        className={cn(styles.button.style, style)}
        onClick={action?action:null}
        form={form?form:null}
    >
        {name||children}
    </button>
  )
};

export default Button
