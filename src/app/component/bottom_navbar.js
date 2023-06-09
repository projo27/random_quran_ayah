'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { randomAyahNumber } from '../services/client_api'
// import { useRouter, usePathname  } from 'next/router'


export default function BottomNavbar() {
  const router = useRouter()
  const pathName = usePathname()

  function randomAyah(e) {
    router.push(`/random/${randomAyahNumber()}`);
    return;
  }

  return (
    <div className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-evenly from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none bg-slate-800">
      <div>
        <Link href='/list'>
          List Ayah
        </Link>
      </div>
      <div>
        <button onClick={randomAyah} type="button">
          <span>Random</span>
        </button>
        {/* <Link href={'random'}>
          Random
        </Link> */}
      </div>
      <div>
        <Link href={'settings'}>Settings</Link>
      </div>
    </div>
  )
}
