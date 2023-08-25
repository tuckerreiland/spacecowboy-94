'use client';

import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import { Icons } from '../Icons'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement>{}

const UserAuthForm: FC<UserAuthFormProps> = ({className, ...props}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const googleLogIn = async () => {
        setIsLoading(true)
        try{
            await signIn('google')
        } catch (error) {
            // TODO: error message handling
            // {
            //     title: 'There was a problem',
            //     desc: 'There was an error logging in with Google.',
            //     variant: 'destructive' (meaning, start over/try again)
            // }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <button
                onClick={googleLogIn}
                // TODO: button loading prop/state
                // isLoading={isLoading}
            >
                {isLoading?'...':<Icons.google className='h-4 w-4'/>}
                Google
            </button>
        </div>
    )
}

export default UserAuthForm