'use client';

// TODO: Rename file and refactor with space cowboy/cantinet proper terminology

import { Session } from 'next-auth';
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'
import UserAvatar from '../../user/UserAvatar';
import MenuButton from '../../navbar/MenuButton';

interface MiniCreatePostProps {
  session: Session | null
}

const MiniCreatePost: FC<MiniCreatePostProps> = ({session}) => {

    const router = useRouter()
    const pathname = usePathname()

    return (
        <div>
            <UserAvatar
                user ={{
                    name: session?.user.name || null,
                    image: session?.user.image || null
                }}
            />
            {/* TODO: user online marker (more useful for threads) */}
            {/* TODO: input component for post name*/}
            <input/>
            <MenuButton
                name={''}
                action={() => router.push(pathname+'/submit')}
            />
        </div>
    )
}

export default MiniCreatePost