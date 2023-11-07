
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import MainContextProvider from './Contexts/MainContext'
import FishTheme from './components/FishTheme'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NEXT_STARTER-TEMPLATE',
  description: 'THe best way to start your next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Include metadata here */}
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      </head>

     <MainContextProvider>
    
      <body className={inter.className}>
        <div className='min-h-screen '>
          
          <Navbar />
           <FishTheme/> 
          {children}
        </div>
       
      </body>
      </MainContextProvider>
    </html>
  )
}
