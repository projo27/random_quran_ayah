import { cookies } from 'next/headers'

export async function getAll() {
  const store = await cookies();
  return store.getAll();
}

export async function getBasket(name) {
  const store = await cookies();
  return store.get(name);
}

export async function getAddBasket(name, value) {
  const store = await cookies();
  if (store.has(name)) return getBasket(name);
  return setBasket(name, value);
}

export async function setBasket(name, value) {
  const store = await cookies();
  return store.set(name, value, { secure: true });
}

export async function deleteBasket(name) {
  const store = await cookies();
  store.set({
    name: name,
    value: '',
    maxAge: 0
  })
}