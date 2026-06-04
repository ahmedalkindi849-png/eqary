import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Block direct access to old roadmap.html URL - redirect to home
  if (pathname === "/roadmap.html") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Protect the /investor route - check for valid access cookie
  if (pathname === "/investor") {
    const hasAccess = request.cookies.get("investor_access")?.value === "verified"
    
    if (!hasAccess) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/roadmap.html", "/investor"],
}
