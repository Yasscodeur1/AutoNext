import { NextResponse, NextRequest   } from "next/server"

export default async function POST (request: NextRequest) {
  const {cookieName, cookieValue } = await request.json()

  const response = NextResponse.json({message: "CookieSession created"});

  response.cookies.set(cookieName, cookieValue, {
    path: '/ '
  })

  return response;
}