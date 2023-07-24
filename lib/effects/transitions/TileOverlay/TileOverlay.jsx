'use client';

import React from 'react';

import TileRows from "./helpers/TileRows"

export default function TileOverlay ({grid}) {

    const [hidden, setHidden] = React.useState(false)

    const delay = 50*(grid.cols.length + grid.rows.length);

    console.log(delay)

    setTimeout( function() {
        setHidden(true)
    }, delay)

    const rows = grid.rows.length

    return(
        <div className={hidden?'hidden':'row-start-1 col-start-1 z-40 w-full h-full'}>
            <div className={`grid grid-rows-${rows} w-full h-full`}>
                {grid.rows.map((row)=>{
                    return(
                        <TileRows key={row} row={row} grid={grid}/>
                    )
                })}
            </div>
        </div>
        
    )
}