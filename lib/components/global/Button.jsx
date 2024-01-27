'use client';

import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

const Button = ({
    children,
    name,
    action,
    form,
    style
}) => {

  const onClick = (e) => {
    e.preventDefault()
    return action()
  }

  return (
    <button
        className={cn(styles.button.style, style)}
        onClick={(e)=>onClick(e)}
        form={form?form:null}
    >
        {name||children}
    </button>
  )
};

export default Button
