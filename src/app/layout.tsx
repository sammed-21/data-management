import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CustomerProvider } from '@/context/CustomerContext'
import Footer from '@/components/Footer'
 // Define the children prop with the ReactNode type

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomerProvider>
         
          
          <Navbar/>
             
              
          {children}
          <div>

         <Footer/>
          </div>
    </CustomerProvider>
      </body>
    </html>
  )
}
 
