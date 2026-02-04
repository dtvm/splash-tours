import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, whatsapp, tour, date, message } = await req.json();

    if (!name || !email || !tour) {
      return NextResponse.json(
        { error: "Name, email, and tour are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Splash Tours Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Tour Request – Splash Tours`,
      text: `
Name: ${name}
Email: ${email}
WhatsApp: ${whatsapp || "N/A"}
Tour: ${tour}
Date: ${date || "N/A"}
Message: ${message || "N/A"}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Request sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong sending the email." },
      { status: 500 }
    );
  }
}
