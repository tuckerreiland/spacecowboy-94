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

// const [username, setUsername] = useState('')
// const [password, setPassword] = useState('')
// const [showPassword, setShowPassword] = useState(false)

// // TODO: abstract logic to server component
// const logIn = async (username, password) => {
//     try {
//         const res = await cognitoService.signIn(username, password)
//     } catch (error) {
//         console.log(error)
//     }
// }

// return (
//     <div className='m-1 p-10 w-full border border-gray-600'>
//         <h2 className='m-1 p-1 pb-5 text-2xl'
//         >
//             Log In
//         </h2>
//         <p 
//             className='m-1 p-1'
//         >
//             Username or Email
//         </p>
//         <input
//             className='appearance-none bg-transparent m-1 py-1 px-2 border border-gray-600 hover:border-white focus:border-white focus:ring-0 outline-none w-full'
//             value={username}
//             onChange={(e)=>setUsername(e.target.value)}
//         />
//         <p
//             className='m-1 p-1'
//         >Password</p>
//         <div className='grid'>
//             <input
//                 className='row-start-1 col-start-1 bg-transparent m-1 py-1 px-2 border border-gray-600 hover:border-white focus:border-white focus:ring-0 outline-none w-full'
//                 value={password}
//                 type={showPassword?
//                     ''
//                     :
//                     'password'
//                 }
//                 onChange={(e)=>setPassword(e.target.value)}
//             />
//             <div className='row-start-1 col-start-1 m-1 w-fit flex justify-center justify-self-end'>
//                 {showPassword?
//                     <Button
//                         name={'HIDE'}
//                         style={'border-none text-xs font-medium text-white text-opacity-50 hover:text-white'}
//                         action={()=>setShowPassword(false)}
//                     />
//                 :
//                     <Button
//                         name={'SHOW'}
//                         style={'border-none text-xs font-medium text-white text-opacity-50 hover:text-white'}
//                         action={()=>setShowPassword(true)}
//                     />
//                 }
//             </div>
            
//         </div>
        
//         <Link
//             // TODO: forgot password link/logic
//             href={''}
//             className='m-1 p-1 hover:underline'
//         >
//             Forgot Password?
//         </Link>
//         <Button
//             style={'m-1 mt-5 w-full'}
//             name={'Log In'}
//             action={()=>logIn(username, password)}
//         />
//     </div>