import LogIn from '../../../lib/components/auth/LogIn'
import CloseModal from '../../../lib/components/auth/CloseModal'

const page = ({}) => {
    return (
        // figure out how to dim the background while the fixed modal is open
        <div className='fixed grid grid-cols-1 grid-rows-1 w-full h-full items-center z-20'>
            <div className='justify-self-center w-fit box-border border-x-[2px] border-b-[2px] border-gray-300 bg-gray-300'>
                <div className='grid w-full h-fit top-0 bg-gray-300'>
                        <CloseModal/>
                </div>
                <div className='bg-white p-20'>
                    <LogIn/>
                </div>
            </div>
            
        </div>
    )
}

export default page