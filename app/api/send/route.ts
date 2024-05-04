import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";
import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_in1vHRpH_EzgoWTqXU8wR4GrpnMep6QM7");

// interface EmailData {
//   fullName: string;
//   email: string;
//   subject: string;
//   phonenumber: string;
//   message: string;
// }

export async function POST({ fullname, email, subject, phonenumber, message }) {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["venudev2580@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({
        fullName: fullname,
        email: email,
        subject: subject,
        phonenumber: phonenumber,
        message: message,
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { data, error } = await resend.emails.send({
//     from: "Acme <onboarding@resend.dev>",
//     to: ["delivered@resend.dev"],
//     subject: "Hello world",
//     react: EmailTemplate(),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };
