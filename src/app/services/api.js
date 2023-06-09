// import Error from "next/error";

const URLAPI = process.env.API_ALQURAN;
const NEXT_PUBLIC_AYAH_NUMBERS = process.env.NEXT_PUBLIC_AYAH_NUMBERS;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function randomAyahNumber() {
  return getRandomInt(1, NEXT_PUBLIC_AYAH_NUMBERS)
}

export async function fetchAyah(number) {
  number = parseInt(number);
  // await new Promise(resolve => setTimeout(resolve, 2000))
  if (number > NEXT_PUBLIC_AYAH_NUMBERS || number < 1)
    throw Error(`The Number should be between 1 and ${NEXT_PUBLIC_AYAH_NUMBERS}`);

  const response = await fetch(`${URLAPI}/ayah/${number}/quran`);

  if (!response.ok)
    throw new Error('Failed to fetch data');
  return response.json()
}

export async function fetchSurahs(){
  const response = await fetch (`${URLAPI}/surah`);

  if (!response.ok)
    throw new Error(response.statusText);
  // await new Promise(resolve => setTimeout(resolve, 2000))
  return response.json()
}

export async function fetchSurah(number){
  const response = await fetch (`${URLAPI}/surah/${number}`);

  if (!response.ok)
    throw new Error(response.statusText);
  // await new Promise(resolve => setTimeout(resolve, 2000))
  return response.json()
}