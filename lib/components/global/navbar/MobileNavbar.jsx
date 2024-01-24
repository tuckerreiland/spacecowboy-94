'use client';

import { useState } from "react";

import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

import Button from "../Button";
import Dropdown from "../menu/Dropdown";

const MobileNavbar = ({style}) => {
    const [active, setActive] = useState(false)
    const activate = () => {
        active?setActive(false):setActive(true)
    }
    
  return (
    <div className={cn(styles.mobileNavbar, style)}>
        <Button
            name='MobileNavbar'
            style={cn(active?'bg-blue-500':'bg-yellow-500', 'justify-self-end')}
            action={()=>activate()}
        />
        <Dropdown
            style={active?'fixed':'hidden'}
        />
    </div>
  )
};

export default MobileNavbar
