'use server'
 
import { cookies } from 'next/headers' // TODO: revisar performance
 
export async function createCookie(value: any, name: string, path: string) {
    const currentDate = new Date();
    const expires = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // one day expiration
    cookies().set({
        name,
        value,
        path,
        expires
    })
}

export async function getCookie(name: string) {
  const cookieStore = cookies()
  const cookie = cookieStore.get(name)
  if(cookie?.name && cookie.value){
    return JSON.parse(cookie.value)
  }else{
    return null
  }
  
  
}

  export const setCookie = (name: string, value: any, days: number) => {
    const isClient = typeof document !== 'undefined';
    if(isClient){
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }
  };