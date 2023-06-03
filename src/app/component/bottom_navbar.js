import Link from 'next/link'
import React from 'react'

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 left-0 flex h-24 w-full items-center justify-evenly from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <div>
        <Link href='/list'>
          List Ayah
        </Link>
      </div>
      <div>
        <Link href='/random'>
          Random
        </Link>
      </div>
      <div>
        <Link href={'settings'}>Settings</Link>
      </div>
    </div>
  )
}
