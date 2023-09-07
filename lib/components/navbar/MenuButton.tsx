import React, { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { cn } from '../../helpers/util'

// TODO: refactor link to href
interface MenuButtonProps {
  name: string, link?: string, image?: string, style?: string, action?:()=>void, form?:string
}

const MenuButton: FC<MenuButtonProps> = ({name, link, image, style, action, form}) => {

    // TODO: refactoring this into a button has made the styling change because buttons want to center their content while an a tag (link) doesn't assume that. I'll need to think that through when I refactor this component because there will be times when I want the button to be centered, times when I don't want it to be
    return (
        <button
            className={cn('border-[1px] border-transparent hover:border-l-gray-100 hover:border-b-gray-500 hover:border-r-gray-500 hover:border-t-gray-100 active:border-t-gray-500 active:border-l-gray-500 active:border-b-gray-100 active:border-r-gray-100', style)}
            onClick={action?action:null}
            form={form}
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