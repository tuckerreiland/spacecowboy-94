import React, { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { cn } from '../../helpers/util'

// TODO: refactor link to href
interface MenuButtonProps {
  name: string, link?: string, image?: string, style?: string, action?:()=>void
}

const MenuButton: FC<MenuButtonProps> = ({name, link, image, style, action}) => {
    return (
        <button
            className={cn('border-[1px] border-transparent hover:border-l-gray-100 hover:border-b-gray-500 hover:border-r-gray-500 hover:border-t-gray-100 active:border-t-gray-500 active:border-l-gray-500 active:border-b-gray-100 active:border-r-gray-100', style)}
            onClick={action?action:null}
        >
            {link?
                <Link 
                    href={link}
                >
                    {image?
                        <Image
                            src={image}
                            fill
                            alt={name}
                        />
                    :
                    name}
                </Link>
            :   
                <>
                    {image?
                        <Image
                            src={image}
                            fill
                            alt={name}
                        />
                    :
                    name}
                </>
            }
        </button>
        
    )
}

export default MenuButton