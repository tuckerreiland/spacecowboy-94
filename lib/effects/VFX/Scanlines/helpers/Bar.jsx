import Scan from "./Scan"

export default function Bar ({bars, bar, scanlines}){
    return(
        
            <div id={`${bar}`} className={(bar%2==0)?'grid grid-row-10 grid-cols-1 w-full h-full bg-yellow-100 opacity-50':'grid grid-row-10 grid-cols-1 w-full h-full bg-yellow-200 opacity-50'}>
                    {scanlines.scans.map((scan)=>{
                    return(
                        <Scan key={scan} bars={bars} scan={scan} scanlines={scanlines}/>
                    )
                })}
            </div>
    )
}