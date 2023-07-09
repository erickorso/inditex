import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest){

    const response = NextResponse.next({
        request: {
            headers: new Headers(req.headers)
        }
    })

    console.log('request ', req.nextUrl.pathname);
    return response
}

export const config = {
    matcher: '/'
}