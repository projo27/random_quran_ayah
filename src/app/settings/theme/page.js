import ListItem from '@/app/component/list_item';
import NavBar from '@/app/component/navbar'
import { colorList, getTheme } from '@/app/services/theming'
import React from 'react'

export default async function Page() {
  const theme = await getTheme();

  const lists = colorList.map((c) => {
    const bgColor = theme == c.name ? `bg-${c.name}-600` : ``;
    //console.log(bgColor);
    return (
      <ListItem className={`${bgColor} mb-2 p-0`}>
        <div className={`flex flex-row justify-between p-2 ${theme != c.name && "cursor-pointer"}`}>
          <span>
            {c.name}
          </span>
          {theme == c.name && <span>✅</span>}
        </div>
      </ListItem>
    )
  });
  return (
    <div className='font-medium text-sm mb-24'>
      <NavBar closable={true}>
        🎡 Change Theme
      </NavBar>
      <ul className='p-8 m-12'>
        {lists}
      </ul>
    </div>
  )
}
