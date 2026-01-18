import { NextResponse } from "next/server";
import emailjs from "emailjs-com";

export async function POST(req) {
  try {
    const { email } = await req.json();

    await emailjs.send(
      process.env.EMAILJS_SERVICE,
      process.env.EMAILJS_TEMPLATE,
      { email },
      process.env.EMAILJS_PUBLIC
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Email failed" },
      { status: 500 }
    );
  }
}