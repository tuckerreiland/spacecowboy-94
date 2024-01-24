import { cn } from "../utils"

/**
 * TODO:
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
                case 'display': return style = style + this.style[key]
                default:
                    if (this.style[key]===''){
                        return
                    } else {
                        return style = style + `${key}-${this.style[key]}` + ' '
                    }
            }
        })
        console.log(style)
        return cn(style)
    }
}