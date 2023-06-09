import React from 'react'
import { fetchSurah } from '@/app/services/api';
import { Noto_Naskh_Arabic } from 'next/font/google';
import ListItem from '@/app/component/list_item';
import { color } from '@/app/services/theming';
import Link from 'next/link';

const notosans = Noto_Naskh_Arabic({ subsets: ['arabic'] });

export default async function Page({ params }) {
  const { primary, secondary } = await color();
  const { textPrimary, textSecondary } = { textPrimary: `text-${primary}-500`, textSecondary: `text-${secondary}-200` };

  console.log(textPrimary, textSecondary);

  const surahNumber = params.number;
  const { data } = await fetchSurah(surahNumber);
  // console.log(data)
  const { number, name, englishName, englishNameTranslation, numberOfAyahs, ayahs } = data;

  let no = 0;
  const list = ayahs.map(d => {
    const { number, text, numberInSurah, juz } = d
    return (
      <ListItem className='mb-2'>
        <Link href={`/random/${number}`}>
          <div className="flex flex-row justify-between">
            <span className={`${textPrimary} flex flex-row justify-center items-center opacity-80 h-7 w-7 left-1/2 text-2xl font-medium mr-3`}>
              {++no}
            </span>
            <strong className={`${notosans.className} ${textSecondary} font-semibol text-3xl text-right`}>
              {text}
            </strong>
          </div>
        </Link>
      </ListItem>
    )
  });

  return (
    <div className="p-8 mb-24">
      <ul className='flex flex-col'>{list}</ul>
    </div>
  )
}
