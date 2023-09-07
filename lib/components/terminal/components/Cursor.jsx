import BlinkingCursor from '../../../effects/BlinkingCursor'

const Cursor = ({ blink, cursors, searchInput }) => {
    return(
        <div className='row-start-1 col-start-1'>
            {blink?
                <h4 className=''>  
                    <span className='opacity-0'>
                        {cursors}
                    </span>
                    <BlinkingCursor cursor='▋'/>
                </h4>
            :
                <h4 className=' opacity-50'>  
                    {searchInput?searchInput:'...'}
                </h4>
            }
        </div>
        
    )
}

export default Cursor;