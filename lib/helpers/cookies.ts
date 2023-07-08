'use server'
 
import { cookies } from 'next/headers'
 
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