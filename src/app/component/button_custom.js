import React from 'react'

export default function CustomButton({children, onClick, className}) {
  return (
    <button onClick={onClick} className={`${className} rounded-xl border-2 border-white flex p-3 text-xs items-center justify-center`}>
      <span>
        {children}
      </span>
    </button>
  )
}
