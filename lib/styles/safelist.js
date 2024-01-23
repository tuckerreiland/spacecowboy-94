import { styles } from "."

const compileSafelist = (styles) => {
    const compiledSafelist = []
    Object.keys(styles).map((key)=>{
        styles[key].split(' ').map((style)=> compiledSafelist.push(style))
    })
    return compiledSafelist
}

const safelist = compileSafelist(styles)

console.log('styles/safelist.js', safelist)