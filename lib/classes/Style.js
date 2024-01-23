import { cn } from "../utils"

/**
 * TODO: utility for composing tailwind classes i.e. padding_top -> pt
 */

export default class Style {
    constructor(style){
        this.style = style
    }

    composeStyle(){
        let style = ''
        Object.keys(this.style).map((key)=>{
            switch (key) {
                case 'misc': return style = style + this.style[key]
                default:
                    let tailwindKey = key.split('_').map((name)=>name.charAt(0)).join('')
                    if (this.style[key]===''){
                        return
                    } else {
                        return style = style + `${tailwindKey}-${this.style[key]}` + ' '
                    }
            }
        })
        return cn(style)
    }
}