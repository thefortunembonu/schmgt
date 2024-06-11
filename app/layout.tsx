import '/styles/globals.css'
import Navbar from '/components/Navbar'
import backgroundImage from "../public/Images/hats.jpg";


export const metadata = {
  title: 'Knoxx University',
  description: 'Knoxx School Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      
      <body className=''>

      <Navbar/>
        {children}
     
        </body>
    </html>

  )
}



