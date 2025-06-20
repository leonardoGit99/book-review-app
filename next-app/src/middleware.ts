import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";

const protectedRoutes = ["/reviews"/* , "/api/reviews" */];
const guestOnlyRoutes = ["/login", "/signup"]; // routes where doesn't make sense if user already logged

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
  const { pathname } = req.nextUrl;

  //trying to check if there's a token
  let isAuthenticated = false;
  if (token) {
    try {
      await jwtVerify(token, secret);
      isAuthenticated = true;
    } catch (err) {
      console.error("Invalid token", err);
    }
  }

  //redirect if is autenticated and visit /login or /signup
  if (guestOnlyRoutes.includes(pathname) && isAuthenticated) {
    return NextResponse.redirect(new URL("/reviews", req.url));
  }

  //redirect if isn't autenticated and visit protected routes
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  //if user visits "/" it redirects depends on its autentication
  if (pathname === "/") {
    return NextResponse.redirect(new URL(isAuthenticated ? "/reviews" : "/login", req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    // "/",              // root
    "/login",         // guest-only
    "/signup",        // guest-only
    "/reviews/:path*", // protected
    // "/api/reviews/:path*",
  ],
};
