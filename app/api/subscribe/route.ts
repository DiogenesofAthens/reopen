import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Notify address — receives a copy of every new signup
const NOTIFY_EMAIL = "kwessman@gmail.com"
// Sender address — must be from a domain verified in your Resend account
const FROM_ADDRESS = "Re-Open <noreply@re-open.us>"

export async function POST(req: NextRequest) {
  let email: string
  try {
    const body = await req.json()
    email = (body.email ?? "").trim().toLowerCase()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    // Dev mode: log and return success so local development works without keys
    console.log(`[subscribe] DEV — would have subscribed: ${email}`)
    return NextResponse.json({ ok: true })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    // 1. Send a confirmation email to the subscriber
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: "You're in — Re-Open",
      html: `
        <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; color: #1a1a2e; padding: 40px 24px;">
          <p style="font-size: 22px; font-weight: normal; margin-bottom: 24px;">
            Thanks for joining Re-Open.
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #444; margin-bottom: 16px;">
            We're building a community of people who believe American society is worth
            taking seriously — and who are willing to think hard about how to fix it.
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #444; margin-bottom: 32px;">
            We'll be in touch with ideas, writing, and ways to get involved.
          </p>
          <p style="font-size: 13px; color: #999;">
            — The Re-Open team
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />
          <p style="font-size: 11px; color: #bbb;">
            You signed up at re-open.us. To unsubscribe, reply to this email.
          </p>
        </div>
      `,
    })

    // 2. Notify Kirk of the new signup
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: NOTIFY_EMAIL,
      subject: `New Re-Open signup: ${email}`,
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[subscribe] Resend error:", err)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
