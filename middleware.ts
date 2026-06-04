import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Block direct access to roadmap.html unless user has valid access cookie
  if (pathname === "/roadmap.html") {
    const hasAccess = request.cookies.get("investor_access")?.value === "verified"
    
    if (!hasAccess) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/roadmap.html"],
}
