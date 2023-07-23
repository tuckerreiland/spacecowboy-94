export default function Line ({scan, line}) {
    return(
        <div id={`${scan}X${line}`} className={(line%2==0)?'h-full w-full bg-yellow-100 opacity-75':'h-full w-full bg-yellow-400 opacity-25'}/>
    )
}