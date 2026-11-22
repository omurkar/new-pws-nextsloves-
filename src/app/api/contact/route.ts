import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, institution, designation, email, phone, students, message } = body;

    // Validation
    if (!name || !institution || !designation || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable is not configured.');
      return NextResponse.json(
        { error: 'Email service is currently not configured.' },
        { status: 500 }
      );
    }

    const primaryRecipient = process.env.NOTIFICATION_EMAIL || 'contact@nextsolves.in';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const formattedDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const leadHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%); padding: 32px 24px; color: white; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
          .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.9; }
          .body { padding: 28px 24px; }
          .badge { display: inline-block; padding: 4px 12px; background: #eff6ff; color: #2563eb; border-radius: 9999px; font-size: 12px; font-weight: 600; margin-bottom: 20px; border: 1px solid #bfdbfe; }
          .info-grid { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 24px; }
          .info-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 16px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; color: #64748b; margin-bottom: 4px; }
          .value { font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word; }
          .message-box { background: #eff6ff; border: 1px solid #dbeafe; border-radius: 10px; padding: 16px; margin-top: 8px; }
          .message-content { font-size: 13px; line-height: 1.6; color: #1e3a8a; white-space: pre-wrap; }
          .footer { background: #f8fafc; padding: 18px 24px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Institutional Walkthrough Request</h1>
            <p>Submitted via NextSolves Platform Portal</p>
          </div>
          <div class="body">
            <span class="badge">NextSolves PWS Demo Lead</span>

            <div class="info-grid">
              <div class="info-card">
                <div class="label">Lead Name</div>
                <div class="value">${name}</div>
              </div>

              <div class="info-card">
                <div class="label">College / Institution</div>
                <div class="value">${institution}</div>
              </div>

              <div class="info-card">
                <div class="label">Designation / Role</div>
                <div class="value">${designation}</div>
              </div>

              <div class="info-card">
                <div class="label">Institutional Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
              </div>

              <div class="info-card">
                <div class="label">Contact Number</div>
                <div class="value">${phone ? `<a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>` : 'Not provided'}</div>
              </div>

              <div class="info-card">
                <div class="label">Approx. Student Volume</div>
                <div class="value">${students || 'Not specified'}</div>
              </div>
            </div>

            <div class="label" style="margin-top: 18px;">Department Requirements / Inquiry:</div>
            <div class="message-box">
              <div class="message-content">${message}</div>
            </div>
          </div>
          <div class="footer">
            Received on ${formattedDate} IST • NextSolves Operational Dispatch
          </div>
        </div>
      </body>
      </html>
    `;

    // 1. Send inquiry notification via Resend to primaryRecipient (contact@nextsolves.in)
    let sendResult = await resend.emails.send({
      from: fromEmail,
      to: primaryRecipient,
      replyTo: email,
      subject: `🚨 [New Demo Request] ${institution} — ${name}`,
      html: leadHtml,
    });

    // If Resend sandbox restricts to account owner's email address (403 validation error on unverified domain)
    if (sendResult.error && (sendResult.error as any).statusCode === 403) {
      console.warn('Resend testing sandbox restriction detected:', sendResult.error.message);
      // Fallback delivery to account owner to ensure the inquiry is never dropped
      const fallbackResult = await resend.emails.send({
        from: fromEmail,
        to: 'ommurkar8@gmail.com',
        replyTo: email,
        subject: `🚨 [Demo Request - Forwarded] ${institution} — ${name}`,
        html: leadHtml,
      });

      if (!fallbackResult.error) {
        sendResult = fallbackResult;
      }
    }

    if (sendResult.error) {
      console.error('Resend delivery failed:', sendResult.error);
      return NextResponse.json(
        { error: sendResult.error.message || 'Failed to dispatch inquiry notification.' },
        { status: 500 }
      );
    }

    // 2. Send immediate confirmation receipt to applicant (wrapped to gracefully handle sandbox restrictions)
    try {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        replyTo: primaryRecipient,
        subject: `Your NextSolves Demo Request: ${institution}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 580px; margin: 0 auto; padding: 24px; color: #1e293b; line-height: 1.6;">
            <div style="margin-bottom: 20px;">
              <h2 style="color: #1e40af; margin: 0 0 8px;">Thank You, ${name}</h2>
              <p style="font-size: 14px; color: #475569; margin: 0;">We have received your institutional demo request for <strong>${institution}</strong>.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin: 18px 0; font-size: 13px;">
              <p style="margin: 0 0 8px; font-weight: 600; color: #0f172a;">Next Steps:</p>
              <ul style="margin: 0; padding-left: 20px; color: #475569;">
                <li>Our academic technology coordinator will review your departmental needs.</li>
                <li>We will reach out to confirm a convenient slot for your institutional walkthrough.</li>
                <li>We will prepare an interactive live environment simulating your examination batch setup.</li>
              </ul>
            </div>
            <p style="font-size: 12px; color: #64748b; margin-top: 24px;">
              For immediate assistance, contact us directly at <a href="mailto:contact@nextsolves.in" style="color: #2563eb;">contact@nextsolves.in</a> or call <a href="tel:+919136234409" style="color: #2563eb;">+91 9136234409</a>.
            </p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 11px; color: #94a3b8; text-align: center;">
              NextSolves — Practical Workflow System (PWS)<br/>Autonomous Examination & Institutional Workflow Infrastructure
            </p>
          </div>
        `,
      });
    } catch (confError) {
      console.warn('Applicant confirmation email skipped (sandbox or unverified domain):', confError);
    }

    return NextResponse.json({ success: true, id: sendResult.data?.id });
  } catch (error: any) {
    console.error('Error handling demo request:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
