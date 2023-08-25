import { FC } from 'react'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement>{}

const UserAuthForm: FC<UserAuthFormProps> = ({className, ...props}) => {
  return (
    <div>
      <button>Google</button>
    </div>
)
}

export default UserAuthForm