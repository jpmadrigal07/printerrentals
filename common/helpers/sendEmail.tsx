import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import { EmailTemplate } from "@/common/components/Email/EmailTemplate";

// Create nodemailer transporter with SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailTemplateProps {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  comment: string;
  website: string;
  subject: string;
}

export const sendEmail = async (props: EmailTemplateProps) => {
  try {
    const emailHtml = render(<EmailTemplate {...props} />);
    
    const mailOptions = {
      from: process.env.SMTP_FROM || "Printer Rentals PH <noreply@printerrentals.ph>",
      to: process.env.EMAIL_RECEIVER || "jp.madrigal07@gmail.com",
      subject: props.subject,
      html: emailHtml,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
