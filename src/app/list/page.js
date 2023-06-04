import React from 'react'
import { fetchSurahs } from '../services/api'
import { Noto_Naskh_Arabic } from 'next/font/google';
import Link from 'next/link';

const notosans = Noto_Naskh_Arabic({ subsets: ['arabic'] });

export default async function ListAyahs() {
  const { data } = await fetchSurahs();

  const list = data.map(e => {
    const { number, name, englishName, englishNameTranslation, numberOfAyahs, revelationType } = e;
    return (
      <li className='mb-2' key={number}>
        <Link
          href={`/surah/${number}`}
          className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
        >
          <div className="flex flex-row justify-between">
            <div className='flex flex-row justify-start items-center'>
              <span className='flex flex-row justify-center items-center text-pink-500 opacity-80 h-7 w-7 left-1/2 text-2xl font-medium mr-3'>
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
      </li>
    )
    // return <div>{`${number} ${englishName} ${name}`}</div>;
  });

  return (
    <ul className={'flex flex-col text-white p-8 mb-10'}>
      {list}
    </ul>
  )
}
