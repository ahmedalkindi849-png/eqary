import { NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"

export async function GET(request: NextRequest) {
  // Check for valid access cookie
  const hasAccess = request.cookies.get("investor_access")?.value === "verified"

  if (!hasAccess) {
    // Redirect to home page if no valid access
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Read and serve the HTML file
  try {
    const filePath = path.join(process.cwd(), "app", "investor", "roadmap.html")
    const htmlContent = await readFile(filePath, "utf-8")

    return new NextResponse(htmlContent, {
      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    })
  } catch (error) {
    console.error("Error reading roadmap.html:", error)
    return NextResponse.redirect(new URL("/", request.url))
  }
}
