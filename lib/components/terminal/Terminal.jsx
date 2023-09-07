'use client';

import React from 'react';

import Cursor from './components/Cursor'

const Terminal = () => {
   
    const [searchInput, setSearchInput] = React.useState('')
    const [searchTerm, setSearchTerm] = React.useState('')
    const [searchAutocomplete, setSearchAutocomplete] = React.useState('')
    // const [searchSuggestions, setSearchSuggestions] = React.useState([])

    //cursor management
    const [blink, setBlink] = React.useState(false)
    const [cursorPosition, setCursorPosition] = React.useState(0)
    const cursors = []
    for ( let i=0; i<cursorPosition; i++) {
        cursors.push('▋')
    }

    // TODO: order returned array of communities in alphanumeric order
    const searchArray = [
        'anime',
        'animation',
        'cooking',
        'mexican cooking',
        'chinese cooking',
        'italian cooking',
        'american cooking',
        'french cooking',
        'vietnamese cooking',
        'cooking techniques',
    ]

    const setSearch = ( input ) => {
        const searchResult = searchArray.find((str)=>str.charAt(0)===input.toLowerCase().charAt(0)&&str.includes(input.toLowerCase()))
        // const suggestionArray = searchArray.filter((str)=>str.includes(input.toLowerCase()))
        // setSearchSuggestions(suggestionArray)
        setSearchInput(input)
        searchResult?setSearchAutocomplete(searchResult.slice(input.length)):setSearchAutocomplete('')
        searchResult?setSearchTerm(searchResult):setSearchTerm('')
    }

    const keyCommands = (e) => {
        switch (e.keyCode){
            case 9: 
                    if (searchTerm){
                        e.target.value = searchTerm
                        setSearchInput(searchTerm)
                        setCursorPosition(searchTerm.length)
                        setSearchAutocomplete('')
                        e.preventDefault()
                    } else {
                        setCursorPosition(searchInput.length)
                        e.preventDefault()
                    }
                break;
            case 37: 
                    cursorPosition==0?null:setCursorPosition(cursorPosition-1)
                break;
            case 39: {
                    cursorPosition==e.target.value.length?null:setCursorPosition(cursorPosition+1)
                break;
            }
            case 40: {
                    setCursorPosition(searchInput.length)
                break;
            }
            case 38: {
                    setCursorPosition(0)
                break;
            }
            default: null
        }
    }

    return(
        <div className='grid'>
            <div className='flex'>
                <h4 className='w-fit font-mono font-bold'>~/cantinet/</h4>
                <div className='grid'>
                    <input 
                        className="row-start-1 col-start-1 z-10 appearance-none border-0 outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent caret-transparent font-mono" 
                        placeholder={''} 
                        onChange={(e)=>((setSearch(e.target.value)), setCursorPosition(e.target.selectionStart))}
                        onFocus={(e)=>(setBlink(true))}
                        onBlur={()=>(setBlink(false), setSearchAutocomplete(''))}
                        onKeyDown={(e)=>keyCommands(e)}
                        tabIndex={-1}
                    />
                    <div className='grid row-start-1 col-start-1 font-mono'>
                        <Cursor blink={blink} cursors={cursors} searchInput={searchInput}/>
                        <h4 className='row-start-1 col-start-1 opacity-50'>
                            <span className='opacity-0'>
                                {searchInput}
                            </span>
                            {searchAutocomplete}
                        </h4>
                    </div>
                </div>
            </div>
            {/* TODO: work on suggestion array */}
            {/* <div className='flex'>
                <h4 className='w-fit font-mono font-bold opacity-0'>~/cantinet/</h4>
                <div className='grid grid-rows-1 grid-flow-col auto-cols-auto'>
                    {searchInput&&searchSuggestions?
                        searchSuggestions.slice(0,5).map(suggestion=>{
                            return <h4 key={suggestion} className='font-mono pr-2'>{suggestion},</h4>
                        })
                    :
                        null
                    }
                </div>
            </div> */}
        </div>
    )
}

export default Terminal;