import Template1 from '@/common/components/Email/Template1';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ email = "jp.madrigal07@gmail.com", subject = "Inquiry", firstName = "John" }: { email?: string, subject?: string, firstName?: string}) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Printer Rentals <sendemail@resend.dev>',
      to: [email],
      subject: subject,
      react: Template1({ firstName }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}