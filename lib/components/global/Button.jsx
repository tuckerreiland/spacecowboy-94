/**
 TODO:
    - onClick formatting
 */
import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

const Button = ({
    children,
    name,
    action,
    form,
    style
}) => {
  return (
    <button
        className={cn(styles.button, style)}
        onClick={action?action:null}
        form={form?form:null}
    >
        {name||children}
    </button>
  )
};

export default Button
