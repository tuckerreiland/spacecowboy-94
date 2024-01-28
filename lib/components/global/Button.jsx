'use client';

import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

const Button = ({
    children,
    name,
    action,
    form,
    className
}) => {

  const onClick = (e) => {
    e.preventDefault()
    return action()
  }

  return (
    <button
        className={cn(styles.button.style, className)}
        onClick={(e)=>onClick(e)}
        form={form?form:null}
    >
        {name||children}
    </button>
  )
};

export default Button
