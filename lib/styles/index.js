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
    bg: 'red-500'
})

const header = new Style ({
    h: '[48px]',
    w: 'screen',
    m: '',
    p: '',
    bg: colors.style.bg,
    misc: 'fixed top-0 z-50 flex justify-between'
})

const logo = new Style ({
    h: header.style.h,
    w: '',
    m: '',
    p: '',
    bg: colors.style.bg,
    misc: 'z-[60]'
})

const footer = new Style ({
    h: 'fit',
    w: 'screen',
    m: '',
    p: '',
    bg: colors.style.bg,
    misc: ``
})

const navbar = new Style ({
    h: header.style.h,
    w: 'full',
    m: '',
    p: '',
    bg: 'red-500',
    misc: 'fixed'
})

const mobileNavbar = new Style ({
    h: header.style.h,
    w: 'full',
    m: '',
    p: '',
    bg: '',
    misc: 'w-full grid grid-cols-1 grid-rows-1'
})

const desktopNavbar = new Style ({
    h: header.style.h,
    w: 'screen',
    m: '',
    pr: '4',
    bg: '',
    misc: 'w-full grid justify-end items-center grid-flow-col gap-4'
})

const main = new Style ({
    h: 'full',
    w: 'screen',
    m: '',
    p: '',
    pt: header.style.h,
    bg: 'green-500',
    misc: ``
})

const button = new Style ({
    h: 'fit',
    w: 'fit',
    m: '',
    p: '',
    px: '2',
    py: '1',
    bg: 'green-500',
    misc: ``
})

const menu = new Style ({
    h: '',
    w: '',
    m: '',
    p: '',
    bg: 'green-500',
    misc: ``
})

const dropdown = new Style ({
    h: 'screen',
    w: 'screen',
    m: '',
    p: '',
    bg: 'red-500',
    misc: `fixed top-${mobileNavbar.style.h} z-50`
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

