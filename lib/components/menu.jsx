export default function Menu() {
    const menuItems = ['Shop', 'Info', 'Contact', 'logbook', 'Docs', 'forum', 'videos', 'mesteño']

    return(
        <div className="grid grid-cols-3 grid-rows-5 items-center justify-items-center w-full h-3/4">
            {menuItems.map((menuItem) => {
                return(
                    <div key={menuItem} className="grid items-center justify-items-center h-full w-full hover:bg-[#e5e7eb7a]">
                        <div className="grid items-center justify-items-center h-fit w-fit">
                            <div className="h-20 w-20 bg-green-400"/>
                            <h1 className="font-mono">{menuItem}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
  
}