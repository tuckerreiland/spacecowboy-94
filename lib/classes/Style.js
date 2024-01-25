import { cn } from "../utils"

/**
 * TODO:
 * - Break point factoring
 */

export default class Style {
    constructor(style){
        this.style = style
    }

    compose(){
        const composedStyle = {}
        Object.keys(this.style).map((key)=>{
            let compositeStyle = ''
            const styles = Object.keys(this.style[key])
            if(!styles.length){
                return composedStyle[key] = this.style[key]
            }
            styles.map((style)=>{
                switch (style) {
                    case 'misc': return compositeStyle = compositeStyle + this.style[key][style]
                    case 'display': return compositeStyle = compositeStyle + this.style[key][style] + ' '
                    default:
                        if (this.style[key][style]===''||undefined){
                            return
                        } else {
                            return compositeStyle = compositeStyle + `${style}-${this.style[key][style]}` + ' '
                        }
                }
            })
            return composedStyle[key] = cn(compositeStyle)
        })
        return composedStyle
    }
}