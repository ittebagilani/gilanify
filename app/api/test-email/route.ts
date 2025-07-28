// app/api/test-email/route.ts
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function GET() {
  try {
    const result = await sendEmail({
      to: "itteba1@gmail.com", // Use your personal email to test
      subject: "Test Email from Gilanify",
      html: "<h1>Test Email</h1><p>This is a test email to verify the configuration.</p>",
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Error sending test email:', error);
    return NextResponse.json(
      { error: 'Failed to send test email' },
      { status: 500 }
    );
  }
}