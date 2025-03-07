import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get cookies from the request
  const cookies = request.cookies.get('token'); // Replace 'token' with your cookie name

  // console.log(cookies);

  // Uncomment this if you want to protect the routes
  if (!cookies) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Apply middleware to both /cart and /account paths
export const config = {
  matcher: ['/cart/:path*', '/account/:path*'],
};
