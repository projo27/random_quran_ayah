import React from 'react'
import { Noto_Naskh_Arabic } from 'next/font/google';
import { fetchAyah } from '@/app/services/api';
// const URLAPI = process.env.API_ALQURAN;
// const NEXT_PUBLIC_AYAH_NUMBERS = process.env.NEXT_PUBLIC_AYAH_NUMBERS;

export const revalidate = 0;
export const metadata = {
  title: `${process.env.APP_NAME} (Random Ayah)`
}

const notosans = Noto_Naskh_Arabic({ subsets: ['arabic'] })

export default async function RandomAyah({params}) {
  const randomAyahNumber = params.number;
  // console.log(randomAyahNumber());
  let { data: { text, numberInSurah, surah: { number, englishName, englishNameTranslation } } } = await fetchAyah(randomAyahNumber);
  return (
    <>
      <div>
        <p className={`py-20 px-12 font-bold dir-rtl text-4xl leading-normal text-center ${notosans.className}`}>
          {text}
        </p>
        <div className={`text-center`}>{numberInSurah}:{number} {englishName}
          <i>({englishNameTranslation})</i>
        </div>
      </div>
    </>
  )
}
