'use client';

import React from 'react';

import BlinkingCursor from '../../effects/BlinkingCursor'

const SearchInput = () => {
   
    const [searchInput, setSearchInput] = React.useState('')
    const [searchTerm, setSearchTerm] = React.useState('')
    const [searchAutocomplete, setSearchAutocomplete] = React.useState('')

    const [blink, setBlink] = React.useState(false)

    // TODO: order returned array of communities in alphanumeric order
    const searchArray = [
        'anime',
        'animation',
        'cooking',
        'mexican cooking',
    ]

    const setSearch = ( input ) => {
        const searchResult = searchArray.find((str)=>str.charAt(0)===input.toLowerCase().charAt(0)&&str.includes(input.toLowerCase()))
        
        input?(setSearchInput(input)):setSearchInput('')
        searchResult?setSearchAutocomplete(searchResult.slice(input.length)):setSearchAutocomplete('')
        searchResult?setSearchTerm(searchResult):setSearchTerm('')
    }

    const autocomplete = (e) => {
        console.log(e.target.value)
        if (e.keyCode===9) {
            e.target.value = searchTerm
            setSearchInput(searchTerm)
            setSearchAutocomplete('')
            e.preventDefault()
        } else {
            null
        }
    }

    return(
        <div className='flex'>
            <h4 className='w-fit text-3xl font-mono'>~/cantinet/</h4>
            <div className='grid'>
                {/* TODO: tab autocompletes input with searchTerm state */}
                <input 
                    className="row-start-1 col-start-1 z-10 appearance-none border-0 outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent caret-transparent text-3xl font-mono" 
                    placeholder={''} 
                    onChange={(e)=>((setSearch(e.target.value)))}
                    onFocus={()=>setBlink(true)}
                    onBlur={()=>setBlink(false)}
                    onKeyDown={(e)=>autocomplete(e)}
                    tabIndex={-1}
                    />
                <div 
                    className='grid row-start-1 col-start-1 text-3xl font-mono'
                >
                    {/* TODO:clean up logic, maybe work this into a component based conditional render*/}
                    {blink?
                        <h4 className='row-start-1 col-start-1'>  
                            <span className='opacity-0'>
                                {searchInput}
                            </span>
                            <BlinkingCursor cursor='▋'/>
                        </h4>
                    :
                        <h4 className='row-start-1 col-start-1 opacity-50'>  
                            {searchInput?searchInput:'search...'}
                        </h4>
                    }
                    <h4 className='row-start-1 col-start-1 opacity-50'>
                        <span className='opacity-0'>
                            {searchInput}
                        </span>
                        {searchAutocomplete}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default SearchInput;