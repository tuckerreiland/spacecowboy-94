import Bar from "./helpers/Bar";
import Scan from "./helpers/Scan";

export default function Scanlines () {

    const bars = {
        bars:[1,2,3,4,5,6,7,8,9],
        scanlines: {
            scans:[1,2,3,4,5],
        lines:[1,2,3,4,5,6,7,8,9]
        }
        
    }

    // const delay = 65*(grid.cols.length + grid.rows.length);

    // console.log(delay)

    // setTimeout( function() {
    //     setHidden(true)
    // }, delay)

    const barsLength = bars.bars.length

    return(
        <div className={'row-start-1 col-start-1 z-10 w-full h-screen'}>
            <div className={`grid grid-rows-${barsLength} w-full h-full`}>
                {bars.bars.map((bar)=>{
                    return(
                        <Bar key={bar} bar={bar} bars={bars.bars} scanlines={bars.scanlines}/>
                    )
                })}
            </div>
        </div>
    )
}