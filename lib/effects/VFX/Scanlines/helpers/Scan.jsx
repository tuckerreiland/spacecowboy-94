import Line from "./Line"

export default function Scan ({scanlines, scan}){
    const lines = scanlines.lines.length
    return(
        <div id={`${scan}`} className={(scan%2==0)?'grid grid-row-10 grid-cols-1 w-full h-full opacity-100':'grid grid-row-10 grid-cols-1 w-full h-full opacity-100'}>
            {scanlines.lines.map((line)=>{
                return(
                    <Line key={line} line={line} scan={scan}/>
                )
            })}
        </div>
    )
}
