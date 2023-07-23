import TileCols from "./TileCols"

export default function TileRows ({grid, row}){
    const cols = grid.cols.length
    return(
        <div id='tile-rows' className={`grid grid-row-1 grid-cols-10 w-full h-full`}>
            {grid.cols.map((col)=>{
                return(
                    <TileCols key={col} row={row} col={col}/>
                )
            })}
        </div>
    )
}