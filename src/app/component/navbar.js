'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

function NavBar({ children, closable }) {

  const router = useRouter();
  function back(e) {
    router.back();
  }

  return (
    <div className='fixed top-0 w-full pl-6 pr-6 pt-4 pb-4 text-xl flex flex-row justify-between items-center bg-slate-600 bg-opacity-60'>
      <span>{children}</span>
      {closable && <span className='text-xs cursor-pointer' onClick={back}>❌</span>}
    </div>
  )
}

export default NavBar