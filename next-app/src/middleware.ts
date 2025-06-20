import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from 'jose';

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (req.nextUrl.pathname.startsWith("/reviews") || req.nextUrl.pathname.startsWith("/api/reviews")) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      await jwtVerify(token, secret);
    } catch (err) {
      console.error("Invalid token", err);
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/reviews/:path*",
    // "/api/reviews/:path*",
  ],
};
