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
      const textContent = `Name: ${name}

Email: ${email}

Phone Number: ${phoneNumber}

Message: ${message}

Comment: ${comment}

Website: ${website}`;

      const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .email-container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #2c5aa0;
            color: white;
            padding: 20px;
            text-align: center;
            margin: -30px -30px 30px -30px;
            border-radius: 8px 8px 0 0;
        }
        .field {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f8f9fa;
            border-left: 4px solid #2c5aa0;
            border-radius: 4px;
        }
        .field-label {
            font-weight: bold;
            color: #2c5aa0;
            margin-bottom: 5px;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1px;
        }
        .field-value {
            color: #333;
            font-size: 14px;
            word-wrap: break-word;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            text-align: center;
            color: #666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        
        <div class="field">
            <div class="field-label">Name</div>
            <div class="field-value">${name || 'Not provided'}</div>
        </div>
        
        <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">${email || 'Not provided'}</div>
        </div>
        
        <div class="field">
            <div class="field-label">Phone Number</div>
            <div class="field-value">${phoneNumber || 'Not provided'}</div>
        </div>
        
        <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value">${message || 'Not provided'}</div>
        </div>
        
        <div class="field">
            <div class="field-label">Comment</div>
            <div class="field-value">${comment || 'Not provided'}</div>
        </div>
        
        <div class="field">
            <div class="field-label">Website</div>
            <div class="field-value">${website || 'Not provided'}</div>
        </div>
        
        <div class="footer">
            <p>This email was sent from the contact form on printerrentalsph.com</p>
            <p>Received on ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>`;

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
          textContent,
          htmlContent,
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