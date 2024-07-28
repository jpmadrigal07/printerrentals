import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Extract the token from the request body
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json({ error: 'Required value are missing' }, { status: 400 });
    }

    const baseUrlPath = 'https://www.google.com/recaptcha/api/siteverify';
    const verify = await fetch(
      `${baseUrlPath}?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const result = await verify.json();
    return NextResponse.json({ success: result.success });
  } catch (error: unknown) {
    return Response.json({ error }, { status: 500 });
  }
}