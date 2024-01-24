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
    misc: 'fixed top-0 z-50 flex justify-between'
})

const logo = new Style ({
    height: header.style.height,
    width: '',
    margin: '',
    padding: '',
    back_ground: colors.style.back_ground,
    misc: 'z-[60]'
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
    height: header.style.height,
    width: 'full',
    margin: '',
    padding: '',
    back_ground: 'red-500',
    misc: 'fixed'
})

const mobileNavbar = new Style ({
    height: header.style.height,
    width: 'full',
    margin: '',
    padding: '',
    back_ground: '',
    misc: 'w-full grid grid-cols-1 grid-rows-1'
})

const desktopNavbar = new Style ({
    height: header.style.height,
    width: 'screen',
    margin: '',
    padding_right: '4',
    back_ground: '',
    misc: 'w-full grid justify-end items-center grid-flow-col gap-4'
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

const button = new Style ({
    height: 'fit',
    width: 'fit',
    margin: '',
    padding: '',
    padding_x: '2',
    padding_y: '1',
    back_ground: 'green-500',
    misc: ``
})

const menu = new Style ({
    height: '',
    width: '',
    margin: '',
    padding: '',
    back_ground: 'green-500',
    misc: ``
})

const dropdown = new Style ({
    height: 'screen',
    width: 'screen',
    margin: '',
    padding: '',
    back_ground: 'red-500',
    misc: `fixed top-${mobileNavbar.style.height} z-50`
})

export const styles = {
    colors: colors.composeStyle(),
    logo: logo.composeStyle(),
    header: header.composeStyle(),
    footer: footer.composeStyle(),
    main: main.composeStyle(),
    button: button.composeStyle(),
    menu: menu.composeStyle(),
    dropdown: dropdown.composeStyle(),
    navbar: navbar.composeStyle(),
    mobileNavbar: mobileNavbar.composeStyle(),
    desktopNavbar: desktopNavbar.composeStyle()
}

