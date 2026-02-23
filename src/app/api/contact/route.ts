import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Les champs nom, email et message sont requis." },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <contact@noemiesaintemarie.com>",
    replyTo: email,
    to: "saintemarie.noemie@gmail.com",
    subject: `Nouveau message de ${name}`,
    text: `Nom : ${name}\nEmail : ${email}${phone ? `\nTéléphone : ${phone}` : ""}\n\nMessage :\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
