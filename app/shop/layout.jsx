export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
  }
  
  export default function ShopLayout({
    children,
  }) {
  
    return (
      <div className="h-full w-screen">
        {children}
      </div>
    )
  }