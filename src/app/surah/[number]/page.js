import React from 'react'
import { fetchSurah } from '@/app/services/api';
import { Noto_Naskh_Arabic } from 'next/font/google';

const notosans = Noto_Naskh_Arabic({ subsets: ['arabic'] });


export default async function Page({ params }) {
  const surahNumber = params.number;
  const { data } = await fetchSurah(surahNumber);
  // console.log(data)
  const { number, name, englishName, englishNameTranslation, numberOfAyahs, ayahs } = data;

  let no = 0;
  const list = ayahs.map(d => {
    const { number, text, numberInSurah, juz } = d
    return (
      <li className='mb-2'>
        <a
          href="#"
          className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
        >
          <div className="flex flex-row justify-between">
            <span className='flex flex-row justify-center items-center text-pink-500 opacity-80 h-7 w-7 left-1/2 text-2xl font-medium mr-3'>
              { ++no }
            </span>
            <strong className={`${notosans.className} font-semibold text-gray-200 text-3xl text-right`}>
              {text}
            </strong>
          </div>

        </a>
      </li>
    )
  });

  return (
    <div className="p-8 mb-24">
      <ul className='flex flex-col'>{list}</ul>
    </div>
  )
}
