import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiter (sliding window per IP)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  
  // Filter out timestamps older than window
  const validTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }
  
  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

function sanitizeText(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    // Determine client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many contact requests. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    // Parse body
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    // Validate Name
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 }
      );
    }
    const trimmedName = name.trim();
    if (trimmedName.length > 100) {
      return NextResponse.json(
        { error: "Name must not exceed 100 characters." },
        { status: 400 }
      );
    }

    // Validate Email
    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return NextResponse.json(
        { error: "Please enter your email address." },
        { status: 400 }
      );
    }
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 100) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Validate Message
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Please enter your message." },
        { status: 400 }
      );
    }
    const trimmedMessage = message.trim();
    if (trimmedMessage.length < 5) {
      return NextResponse.json(
        { error: "Message must be at least 5 characters long." },
        { status: 400 }
      );
    }
    if (trimmedMessage.length > 5000) {
      return NextResponse.json(
        { error: "Message must not exceed 5000 characters." },
        { status: 400 }
      );
    }

    // Verify API Key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey.trim() === "" || apiKey.includes("your_resend_api_key")) {
      console.warn("API Warning: RESEND_API_KEY is missing or unconfigured in environment variables.");
      return NextResponse.json(
        {
          error: "Server configuration missing: RESEND_API_KEY is not set in environment variables.",
          details: "Please add RESEND_API_KEY to your .env.local file."
        },
        { status: 500 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || "ankittiwary968@gmail.com";
    const fromEmail = process.env.FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const resend = new Resend(apiKey);

    const safeName = sanitizeText(trimmedName);
    const safeEmail = sanitizeText(trimmedEmail);
    const safeMessage = sanitizeText(trimmedMessage);

    const htmlContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>New Portfolio Contact</title>
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fdecdc; padding: 24px; color: #121212; margin: 0; }
      .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 3px solid #121212; border-radius: 16px; padding: 28px; box-shadow: 6px 6px 0px #121212; }
      .header { font-size: 22px; font-weight: 900; color: #ff6b4a; margin-bottom: 20px; border-bottom: 2px dashed #121212; padding-bottom: 12px; }
      .field { margin-bottom: 18px; }
      .label { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #555; margin-bottom: 4px; }
      .value { font-size: 16px; font-weight: 700; color: #121212; }
      .value a { color: #ff6b4a; text-decoration: none; }
      .message-box { background-color: #fffdf6; border: 2px solid #121212; border-radius: 12px; padding: 18px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #2b2d42; margin-top: 6px; }
      .footer { margin-top: 24px; pt: 16px; border-top: 1px solid #eee; font-size: 12px; color: #888; font-weight: 600; text-align: center; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">📬 New Portfolio Contact</div>
      
      <div class="field">
        <div class="label">Visitor Name</div>
        <div class="value">${safeName}</div>
      </div>
      
      <div class="field">
        <div class="label">Reply-To Email</div>
        <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
      </div>

      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${safeMessage}</div>
      </div>

      <div class="footer">
        Sent from your Ankit Tiwary Portfolio Contact Form
      </div>
    </div>
  </body>
</html>
`;

    const textContent = `New Portfolio Contact\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`;

    const resendResponse = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: trimmedEmail,
      subject: `New Portfolio Contact — ${trimmedName}`,
      text: textContent,
      html: htmlContent,
    });

    if (resendResponse.error) {
      console.error("Resend API Error:", resendResponse.error);
      return NextResponse.json(
        { error: resendResponse.error.message || "Failed to send email via provider." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
