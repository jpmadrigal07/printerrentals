import { render } from '@react-email/components';
const postmark = require("postmark");
import { EmailTemplate } from "@/common/components/Email/EmailTemplate";

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY || '');

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
    To: process.env.EMAIL_RECEIVER || "jp.madrigal07@gmail.com",
    From: "Printer Rentals PH <john@zkript.dev>",
    Subject: props.subject,
    HtmlBody: emailHtml
  }
  client.sendEmail(msg);
};
