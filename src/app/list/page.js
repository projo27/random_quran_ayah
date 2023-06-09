import React from 'react'
import { fetchSurahs } from '../services/api'
import { Noto_Naskh_Arabic } from 'next/font/google';
import Link from 'next/link';
import ListItem from '../component/list_item';
import { color } from '../services/theming';

const notosans = Noto_Naskh_Arabic({ subsets: ['arabic'] });

export default async function ListAyahs() {
  
  const {primary, secondary} = await color();
  const textColor = `text-${primary}-500`;
  const { data } = await fetchSurahs();

  const list = data.map(e => {
    const { number, name, englishName, englishNameTranslation, numberOfAyahs, revelationType } = e;
    return (
      <ListItem key={number} className={`mb-2 p-0`}>
        <Link
          href={`/surah/${number}`} >
          <div className="flex flex-row justify-between p-4">
            <div className='flex flex-row justify-start items-center'>
              <span className={`${textColor} flex flex-row justify-center items-center opacity-80 h-7 w-7 left-1/2 text-2xl font-medium mr-3`}>
                {number}
              </span>
              {/* <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div>
                <strong className="font-medium text-white">{englishName}</strong>
                <p className="mt-1 text-xs font-medium text-gray-300">
                  {englishNameTranslation}
                </p>
              </div>
            </div>
            <strong className={`${notosans.className} font-semibold text-gray-200 text-3xl`}>
              {name}
            </strong>
          </div>
        </Link>
      </ListItem>
    )
    // return <div>{`${number} ${englishName} ${name}`}</div>;
  });

  return (
    <ul className={'flex flex-col text-white p-8 mb-10'}>
      {list}
    </ul>
  )
}
