/* TODO: 
    - add in breakpoints as objects
        - {
            small: {
                //style object
            }
            medium: {
                //style object
            }
            large: {
                //style object
            }
            xl: {
                //style object
            }
        }
        - I'll have to define the actual screen sizes that I'm using as well
    -Styles class
    -handle dark/light mode 
        - handle with a cookie?
        - Could just be handled as an account setting, or with system settings
*/

import Style from "@/lib/classes/Style"

const colors = new Style({
    back_ground: 'red-500'
})

const header = new Style ({
    height: '[48px]',
    width: 'screen',
    margin: '',
    padding: '',
    back_ground: colors.style.back_ground,
    misc: 'fixed top-0 z-50 w-screen'
})

const footer = new Style ({
    height: 'fit',
    width: 'screen',
    margin: '',
    padding: '',
    back_ground: colors.style.back_ground,
    misc: ``
})

const navbar = new Style ({
    height: '',
    width: 'full',
    margin: '',
    padding: '',
    back_ground: 'red-500',
    misc: 'fixed top-0 z-50 w-screen'
})

const main = new Style ({
    height: 'full',
    width: 'screen',
    margin: '',
    padding: '',
    padding_top: header.style.height,
    back_ground: 'green-500',
    misc: ``
})

export const styles = {
    colors: colors.composeStyle(),
    header: header.composeStyle(),
    footer: footer.composeStyle(),
    main: main.composeStyle()
}

