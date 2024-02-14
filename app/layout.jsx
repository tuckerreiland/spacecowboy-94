import Header from '@/lib/components/global/Header'
import Main from '@/lib/components/global/Main'

import './globals.css'
import Footer from '@/lib/components/global/footer/Footer'
import { cn } from '@/lib/utils'
import { styles } from '@/lib/styles'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/blx7ido.css"/>
		  </head>
      <body className={cn(styles.colors.globalLayout,)}>
        <Header/>
        <Main>          
          {children}
        </Main>
        <Footer/>
      </body>
    </html>
  )
}
