import nodemailer from "nodemailer";

type EmailOptions = {
  to: string;
  subject: string;
  html: string;
  from?: string;
};

// Types for referral data
type ReferralData = {
  referrerName: string;
  referrerEmail: string;
  referrerPhone: string;
  referralName: string;
  referralPhone: string;
  referralEmail?: string;
};

// Email template functions
export const emailTemplates = {
  adminReferralNotification: (data: ReferralData): EmailOptions => ({
    to: process.env.ADMIN_EMAIL || 'itteba@gilanify.com',
    subject: 'New Referral Submission',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Referral Received</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #444;">Referrer Details:</h3>
          <p><strong>Name:</strong> ${data.referrerName}</p>
          <p><strong>Email:</strong> ${data.referrerEmail}</p>
          <p><strong>Phone:</strong> ${data.referrerPhone}</p>
        </div>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
          <h3 style="color: #444;">Referral Details:</h3>
          <p><strong>Name:</strong> ${data.referralName}</p>
          <p><strong>Phone:</strong> ${data.referralPhone}</p>
          <p><strong>Email:</strong> ${data.referralEmail || 'Not provided'}</p>
        </div>
      </div>
    `
  }),

  referrerConfirmation: (data: ReferralData): EmailOptions => ({
    to: data.referrerEmail,
    subject: 'Thank you for your referral',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank you for your referral!</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p>Dear ${data.referrerName},</p>
          <p>We've received your referral for ${data.referralName}. Our team will review it and reach out to them soon.</p>
          <p>Remember, you'll earn 30% of the signed deal value when your referral converts!</p>
        </div>
        
        <div style="margin-top: 20px;">
          <p>Best regards,<br>The Gilanify Team</p>
        </div>
      </div>
    `
  })
};

let isSendingEmail = false; // Prevents duplicate email requests

export async function sendEmail({
  to,
  subject,
  html,
  from = "itteba@gilanify.com",
}: EmailOptions) {
  if (isSendingEmail) return { success: false, error: "Email already being sent" };
  isSendingEmail = true;

  // Ensure environment variables are loaded
  if (!process.env.EMAIL_SERVER_HOST || !process.env.EMAIL_SERVER_PORT || !process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD) {
    console.error("Missing SMTP environment variables.");
    return { success: false, error: "Missing email configuration" };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: Number(process.env.EMAIL_SERVER_PORT) === 465, // Only true for port 465
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    pool: true, // Enable connection pooling
    tls: {
      rejectUnauthorized: false, // For development/testing
      minVersion: "TLSv1.2", // Enforce a secure TLS version
    },
  });

  try {
    const result = await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });

    console.log(`✅ Email sent successfully! Message ID: ${result.messageId}`);
    return { success: true, messageId: result.messageId };
  } catch (error: any) {
    console.error("❌ Failed to send email:", error.message || error);
    return { success: false, error: error.message || "Unknown error" };
  } finally {
    isSendingEmail = false;
  }
}