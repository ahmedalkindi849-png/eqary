import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "app", "landing.html")
    const htmlContent = await readFile(filePath, "utf-8")

    return new NextResponse(htmlContent, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    })
  } catch (error) {
    console.error("[v0] Error reading landing.html:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
