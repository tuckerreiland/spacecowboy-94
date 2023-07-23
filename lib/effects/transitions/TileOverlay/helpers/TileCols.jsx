'use client';

//TODO: Use pure CSS instead of JS/state

import React from "react";

export default function TileCols ({ row, col }){
    const [hidden, setHidden] = React.useState(false)

    const delay = 100*(col + row);

    setTimeout( function() {
        setHidden(true)
    }, delay)

    return(
        <div id={`${row}X${col}`} className={hidden?'opacity-0 h-full w-full':'h-full w-full bg-yellow-100'}/>
    )
}