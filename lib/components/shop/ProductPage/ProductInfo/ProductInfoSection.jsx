'use client';

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { useState } from "react";

import Button from "@/lib/components/global/Button";

const ProductInfoSection = ({infoSectionTitle, infoSection}) => {
    const [toggle, setToggle] = useState(false)
  return (
    <div>
        {/* <ProductInfoHeader/> */}
        <Button
            className={cn(
                'w-full',
                'flex',
                'flex-row',
                'justify-between',
                'align-vertical'
            )}
            action={()=>setToggle(toggle?false:true)}
        >
            <h2>{infoSectionTitle.toUpperCase()}</h2>
            <ChevronDown
                className={cn(
                    'my-auto',
                    'transition-transform',
                    'ease-linear',
                    'duration-75',
                    `${toggle?'rotate-180':''}`
                )}
                size={18}
                strokeWidth={2}
            />
        </Button>
        {/* <ProductInfoContent/> */}
        <div
            className={cn(
                `${toggle?'block':'hidden'}`
            )}
        >
            <p>
            {infoSection.body}
            </p>
        </div>
    </div>
  )
};

export default ProductInfoSection
