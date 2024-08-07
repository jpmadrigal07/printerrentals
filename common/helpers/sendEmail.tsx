import { render } from '@react-email/components';
import sgMail from "@sendgrid/mail";
import { EmailTemplate } from "@/common/components/Email/EmailTemplate";

sgMail.setApiKey(process.env.RESEND_API_KEY || '');

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
  const emailHtml = render(<EmailTemplate {...props} />);
  const msg = {
    to: process.env.EMAIL_RECEIVER || "jp.madrigal07@gmail.com",
    from: "Printer Rentals PH <john@zkript.dev>",
    subject: props.subject,
    html: emailHtml
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
};
