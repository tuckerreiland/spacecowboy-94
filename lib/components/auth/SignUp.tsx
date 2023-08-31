import Link from 'next/link'

import UserAuthForm from './UserAuthForm'


const SignUp = ({}) => {
  return (
    <div>
        <h1 className='font-mono'>Bienvenidos a Space Cowboy.</h1>

        <UserAuthForm/>
        <p>Already a Space Cowboy?{' '}
            <Link
                href={'/log-in'}
            >
                Log In
            </Link>
        </p>
    </div>
  )
    
}

export default SignUp