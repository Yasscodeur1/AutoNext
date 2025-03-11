import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://example-data.draftbit.com/cars");
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
