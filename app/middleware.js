import { NextResponse } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("isLoggedIn"); // Check if user is logged in (cookie-based)

  // Redirect to Login page if not logged in and user is trying to access a page other than Login
  if (!isLoggedIn && request.nextUrl.pathname !== "/Login") {
    const loginUrl = new URL("/Login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow access if logged in
  return NextResponse.next();
}

// Apply middleware to all routes except /Login
export const config = {
  matcher: "/((?!_next|favicon.ico|Login).*)", // Exclude the login page and static assets from redirection
};

