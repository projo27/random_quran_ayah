import { getAddBasket } from "./store_helper";
import { getBasket } from "./store_helper";
import { setBasket } from "./store_helper";

const BASKET_NAME = 'theme';

export const colorList = [
  { name: 'pink', primary: 'pink', secondary: 'gray' },
  { name: 'green', primary: 'green', secondary: 'gray' },
  { name: 'blue', primary: 'blue', secondary: 'gray' },
];

function getColor(name){
  return colorList.find((v) => v.name == name);
}

export async function setThemeColor(name) {
  await setBasket(BASKET_NAME, name);
}

export async function getTheme(){
  return await getBasket(BASKET_NAME) || 'pink';
}

export async function color() {
  let theme = await getTheme(BASKET_NAME);
  return getColor(theme); 
}