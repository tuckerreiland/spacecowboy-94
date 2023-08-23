import TileOverlay from '../../lib/effects/transitions/TileOverlay/TileOverlay'
// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {

  const grid = {
    rows: [1,2,3,4,5,6,7,8,9,10],
    cols: [1,2,3,4,5,6,7,8,9,10]
}

  return (
      <div className='grid overflow-hidden w-full h-full items-center bg-[#FFF7E9]'>
        <TileOverlay grid={grid}/>
        <div className="row-start-1 col-start-1 justify-self-center bg-[#FFF7E9]">
          {children}
        </div>
      </div>
  )
}
