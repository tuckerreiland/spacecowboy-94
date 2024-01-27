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
    globalLayout:{
        bg: 'red-500'
    }
})

const header = new Style ({
    style: {
        h: '[48px]',
        w: 'screen',
        m: '',
        p: '',
        bg: colors.style.globalLayout.bg,
        misc: 'fixed top-0 z-50 flex justify-between'
    }
})

const logo = new Style ({
    style: {
        h: header.style.style.h,
        w: '',
        m: '',
        p: '',
        bg: colors.style.globalLayout.bg,
        misc: 'z-[60]'
    }
})
const footer = new Style ({
    style: {
        h: 'fit',
        w: 'screen',
        m: '',
        p: '',
        py: '4',
        bg: colors.style.globalLayout.bg,
        display: 'relative',
        misc: ``
    }
})

const navbar = new Style ({
    style: {
        h: header.style.style.h,
        w: 'full',
        m: '',
        p: '',
        bg: 'red-500',
        misc: 'fixed'
    }
})

const mobileNavbar = new Style ({
    style: {
        h: header.style.style.h,
        w: 'full',
        m: '',
        p: '',
        bg: '',
        misc: 'w-full grid grid-cols-1 grid-rows-1'
    }
})

const desktopNavbar = new Style ({
    style: {
        h: header.style.style.h,
        w: 'screen',
        m: '',
        pr: '4',
        bg: '',
        misc: 'w-full grid justify-end items-center grid-flow-col gap-4'
    }
})

const main = new Style ({
    style: {
        h: 'full',
        w: 'full',
        m: '',
        p: '',
        pt: header.style.style.h,
        bg: 'green-500',
        misc: ``
    }
})

const button = new Style ({
    style: {
        h: 'fit',
        w: 'fit',
        m: '',
        p: '',
        px: '2',
        py: '1',
        bg: 'green-500',
        misc: `hover:bg-orange-500`
    }
})

const navButton = new Style ({
    style:{
        ...button.style.style,
        h: 'fit',
        w: 'fit',
        m: '',
        p: '',
        px: '2',
        py: '1',
        bg: 'green-500',
        misc: ``
    }
})

const menu = new Style ({
    style: {
        h: '',
        w: '',
        m: '',
        p: '',
        bg: 'green-500',
        misc: ``
    }
})

const dropdown = new Style ({
    style: {
        h: 'screen',
        w: 'screen',
        m: '',
        p: '',
        bg: 'red-500',
        misc: `fixed top-${mobileNavbar.style.style.h} z-50`
    }
    
})

const loading = new Style ({
    style: {
    }
})

// shop
const productList = new Style({
    style: {
        h: '',
        w: '',
        m: '',
        p: '',
        bg: 'blue-500',
        display: '',
        grid: '',
        gap: '',
        misc: ``
    }
})

const productCardImage = new Style ({
    style: {
        h: '',
        w: '',
        m: '',
        p: '',
        bg: 'cyan-500',
        misc: ``,
        display: ''
    },
    imageWidth: 200,
    imageHeight: 300,
})

const productCard = new Style ({
    style: {
        h: '',
        w: '',
        m: '',
        p: '',
        bg: 'purple-500',
        display: '',
        grid: ''
        // TODO: Turn this into a utility function
        // misc: `max-h-[${productCardImage.style.imageHeight+(1-Number(productCardImage.style.style.h.slice(0)/productCardImage.style.style.h.slice(-1)))*productCardImage.style.imageHeight}px]`
    },
    image: {

    },
    name: {
        h: '',
        w: '',
        m: '',
        p: '',
        bg: 'yellow-500',
        misc: ``
    },
    price: {
        h: '',
        w: '',
        m: '',
        p: '',
        bg: 'red-500',
        misc: ``
    }
})

export const styles = {
    // global
    colors: colors.compose(),
    logo: logo.compose(),
    header: header.compose(),
    footer: footer.compose(),
    main: main.compose(),
    button: button.compose(),
    menu: menu.compose(),
    dropdown: dropdown.compose(),
    loading: loading.compose(),

    // navbar
    navbar: navbar.compose(),
    navButton: navButton.compose(),
    mobileNavbar: mobileNavbar.compose(),
    desktopNavbar: desktopNavbar.compose(),

    // shop
    productList: productList.compose(),
    productCardImage: productCardImage.compose(),
    productCard: productCard.compose()
}

