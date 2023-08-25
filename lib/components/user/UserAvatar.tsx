import { FC } from 'react'

import Image from 'next/image'

import { User } from 'next-auth'

interface UserAvatarProps {
    user: Pick<User, 'name'|'image'|'email'>
}

const UserAvatar: FC <UserAvatarProps> = ({user}) => {
    return (
        <div>
            {user.image?
                <div className='relative h-10 w-10'>
                    <Image
                        fill
                        src={user.image}
                        alt='user profile image'
                    />
                </div>
            :
                // TODO: add in a dummy user image
                <div>
                    <h1>NO IMAGE</h1>
                </div>
            }
            
        </div>
    )
}

export default UserAvatar