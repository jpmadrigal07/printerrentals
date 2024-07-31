import EmailTemplate from "@/common/components/Email/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  email = "",
  subject = "",
  name = "",
  phoneNumber = "",
  message = "",
  comment = "",
  website = "",
}: {
  email?: string;
  subject?: string;
  name?: string;
  phoneNumber?: string;
  message?: string;
  comment?: string;
  website?: string;
}) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Printer Rentals <sendemail@resend.dev>",
      to: "nath.printerrentalsph@gmail.com",
      subject: subject,
      react: EmailTemplate({
        name,
        email,
        phoneNumber,
        message,
        comment,
        website,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};
