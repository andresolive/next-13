import { NextResponse } from 'next/server';

export const middleware = (request: any) => {
  return NextResponse.redirect(new URL('/', request.url));
};

export const config = {
  matcher: ['/about'],
};
