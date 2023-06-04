'use client'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function randomAyahNumber() {
  console.log(process.env.NEXT_PUBLIC_AYAH_NUMBERS)
  return getRandomInt(1, process.env.NEXT_PUBLIC_AYAH_NUMBERS)
}