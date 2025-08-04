import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Extract the token from the request body
    const { 
      token, 
      email = "",
      subject = "",
      name = "",
      phoneNumber = "",
      message = "",
      comment = "",
      website = "",
    } = await req.json();

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
    if(result.success) {
      const text = `Name: ${name}\n\nEmail: ${email}\n\nPhone Number: ${phoneNumber}\n\nMessage: ${message}\n\nComment: ${comment}\n\nWebsite: ${website}`;
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': process.env.BREVO_API_KEY!,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'Zkript Solution OPC', email: 'contact@printerrentalsph.com' },
          to: [{ email: process.env.EMAIL_RECEIVER }],
          subject,
          textContent: text,
          htmlContent: text,
        }),
      });
      const data = await res.json();
      console.log('Email sent successfully:', data);
    }
    return NextResponse.json({ success: result.success });
  } catch (error: unknown) {
    return Response.json({ error }, { status: 500 });
  }
}