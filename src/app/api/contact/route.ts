import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, business, challenge, contact } = await request.json();

    if (!name || !business || !challenge || !contact) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Labrynth Website <onboarding@resend.dev>",
      to: "labrynthautomation@gmail.com",
      subject: `New inquiry from ${name} at ${business}`,
      text: [
        `Name: ${name}`,
        `Business: ${business}`,
        `Challenge: ${challenge}`,
        `Contact: ${contact}`,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
