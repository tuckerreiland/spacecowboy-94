import Link from 'next/link'

import UserAuthForm from './UserAuthForm'


const LogIn = ({}) => {
  return (
    <div>
        <h1 className='font-mono'>Bienvenidos de vuelte a Space Cowboy.</h1>

        <UserAuthForm/>
        <p>New to Space Cowboy?{' '}
            <Link
                href={'/sign-up'}
            >
                Sign Up
            </Link>
        </p>
    </div>
  )
    
}

export default LogIn