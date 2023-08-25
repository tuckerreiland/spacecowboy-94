import { FC } from 'react'

import { User } from 'next-auth'
import UserAvatar from '../user/UserAvatar'

interface UserAccountNavProps {
  user: Pick<User, 'name'|'image'|'email'>
}

const UserAccountNav: FC<UserAccountNavProps> = ({user}) => {
    return (
        <div>
            <UserAvatar user={user}/>
        </div>
    )
}

export default UserAccountNav