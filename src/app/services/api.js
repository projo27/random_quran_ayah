// import Error from "next/error";

const URLAPI = process.env.API_ALQURAN;
const AYAH_NUMBERS = process.env.AYAH_NUMBERS;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function randomAyahNumber() {
  return getRandomInt(1, AYAH_NUMBERS)
}

export async function fetchAyah(number) {
  if (number > AYAH_NUMBERS || number < 1)
    throw Error(`The Number should be between 1 and ${AYAH_NUMBERS}`);

  const response = await fetch(`${URLAPI}/ayah/${number}/quran`);

  if (!response.ok)
    throw new Error('Failed to fetch data');
  await new Promise(resolve => setTimeout(resolve, 4000))
  return response.json()
}