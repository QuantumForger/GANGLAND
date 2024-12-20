import { NextResponse } from 'next/server'

export const config = {
  runtime: 'edge',
}

export async function GET(request: Request) {
  return NextResponse.json({
    message: "Hello from the Edge!",
    timestamp: new Date().toISOString(),
  })
}

