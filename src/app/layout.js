import BottomNavbar from './component/bottom_navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: process.env.APP_NAME || '',
  description: process.env.APP_DESC || '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-full`}>
        {children}
        <BottomNavbar />
      </body>
    </html>
  )
}
