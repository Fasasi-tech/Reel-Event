
import { Inter } from 'next/font/google'

// import Sidebar from '../ui/dashboard/Sidebar/Sidebar'
// import Navbar from '../ui/dashboard/Navbar/Navbar'
// import { ContextProvider } from '../context/ContextProvider'
// import { Provider } from 'react-redux'
// import StoreProvider from '../redux/provider'
import '../globals.css'
import Navbars from '../ui/register/Navbar/Navbar'
import { ThemeProvider } from '../ui/ThemeProvider'
import StoreProvider from '../redux/provider'

// import Sidebar from '../ui/dashboard/Sidebar/Sidebar'
// import Navbar from '../ui/dashboard/Navbar/Navbar'
// import { ContextProvider, useStateContext } from '../context/ContextProvider'
// import { Provider } from 'react-redux'
// import StoreProvider from '../redux/provider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Event App',
  description: '',
}

export default function RootLayout({ children }) {



  return (
    // <StoreProvider>
   <StoreProvider>
    <html lang="en">
        <body className={`${inter.className} scroll `} >
          
            <ThemeProvider
                   attribute="class"
                   defaultTheme="system"
                   enableSystem
                   disableTransitionOnChange
            >

                <div className={'w-full bg-gray-100  dark:bg-black min-h-screen '}>
                <div className='mx-8'>
                    <div className='fixed  z-10 w-full  md:px-8 sm:px-4 lg:px-0 top-0 left-0 right-0 dark:bg-black'>
                        <Navbars />
                    </div>
                {children}
                </div>
                </div>
            </ThemeProvider>
          
        </body>
    </html>

     </StoreProvider>
  )
}
