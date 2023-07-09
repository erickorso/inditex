import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest){
    const cookie = req.cookies.get('auth')
    // console.log('cookie ------------>', cookie);

    const response = NextResponse.next({
        request: {
            headers: new Headers(req.headers)
        }
    })
    // response.cookies.set('isAuth', 'true')
    // console.log('response.cookies ------------>', response.cookies);
    // response.headers.set('x-custom-auth-header', 'isAuthed')
    // console.log('response.headers ------------>', response.headers);


    console.log('request ', req.nextUrl.pathname);
    return response
}

export const config = {
    matcher: '/'
}