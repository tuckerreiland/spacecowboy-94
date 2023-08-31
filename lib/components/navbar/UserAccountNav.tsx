'use client';

import { FC, useState } from 'react'

import Link from 'next/link';

import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import UserAvatar from '../user/UserAvatar'
import MenuButton from './MenuButton';

interface UserAccountNavProps {
  user: Pick<User, 'name'|'image'|'email'>
}

const UserAccountNav: FC<UserAccountNavProps> = ({user}) => {
    const [visible, setVisible] = useState(false)

    return (
        <div
            className='grid grid-cols-1 grid-rows-1'
            onMouseEnter={()=>setVisible(true)}
            onMouseLeave={()=>setVisible(false)}
        >   
            <div className='justify-self-end'>
                <UserAvatar 
                user={user}
                />
            </div>
            {/* TODO: add post, create community, settings */}
            {/* dropdown */}
            {visible?
                 <div className='bg-gray-300'>
                    <div className='grid grid-cols-1'>
                        {user.name && <p className='px-[4px] py-[2px] font-sans'>{user.name}</p>}
                        {/* TODO: different menu items based on the location.href */}
                        <MenuButton
                            name={'Feed'}
                            link={'/cantinet/feed'}
                            style={'px-[4px] py-[2px]'}
                        />
                        <MenuButton
                            name={'Post'}
                            link={'/cantinet/post'}
                            style={'px-[4px] py-[2px]'}
                        />
                        <MenuButton
                            name={'Create Cantinet'}
                            link={'/cantinet/create-cantinet'}
                            style={'px-[4px] py-[2px]'}
                        />
                        <div
                            className='border-[1px] border-transparent hover:border-l-gray-100 hover:border-b-gray-500 hover:border-r-gray-500 hover:border-t-gray-100 active:border-t-gray-500 active:border-l-gray-500 active:border-b-gray-100 active:border-r-gray-100'
                        >
                            <button
                                className='w-fit px-[4px] py-[2px] font-sans'
                                onClick={(event) => {
                                    event.preventDefault()
                                    signOut({
                                    callbackUrl: `${window.location.origin}/sign-in`,
                                    })
                                }}
                            >Log Out</button>
                        </div>
                    </div>
                </div>
            :
                null
            }
        </div>
    )
}

export default UserAccountNav