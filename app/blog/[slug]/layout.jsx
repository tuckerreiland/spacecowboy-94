export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
  }
  
  export default function BlogPageLayout({
    children,
  }) {
  
    return (
      <div className="h-full">
        {children}
      </div>
    )
  }