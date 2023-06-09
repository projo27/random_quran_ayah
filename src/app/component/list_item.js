import React from 'react'

export default async function ListItem({...props}) {
  return (
    <li key={props.key} className={` ${props.className} p-4 block h-full rounded-lg border`}>{props.children}</li >
  )
}
