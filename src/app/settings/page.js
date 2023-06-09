import Link from 'next/link'
import React from 'react'
import NavBar from '../component/navbar'

export default function Settings() {
  return (
    <div className='flex flex-col justify-start'>
      <NavBar>
        📐 Settings
      </NavBar>
      <div className='flex flex-col items-center p-8 mt-12'>
        <ul className='text-sm'>
          <li>Sign In</li>
          <li>Notification</li>
          <li>Social Media</li>
          <li><Link href={'settings/theme'}> Change Theme</Link></li>
        </ul>
      </div>
    </div>
  )
}
