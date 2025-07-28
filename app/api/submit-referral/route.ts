// app/api/submit-referral/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { 
      referrerName,
      referrerEmail,
      referrerPhone,
      referralName,
      referralPhone,
      referralEmail 
    } = data;

    // Validate required fields
    if (!referrerName || !referrerEmail || !referrerPhone || !referralName || !referralPhone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create the referral in the database
    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        referrerPhone,
        referralName,
        referralPhone,
        referralEmail,
        status: 'pending'
      },
    });

    // Send email notification to admin
    await sendEmail({
      to: 'info@illustra.design',
      subject: 'New Referral Submission',
      html: `
        <h1>New Referral Submission</h1>
        <h2>Referrer Details:</h2>
        <p><strong>Name:</strong> ${referrerName}</p>
        <p><strong>Email:</strong> ${referrerEmail}</p>
        <p><strong>Phone:</strong> ${referrerPhone}</p>
        
        <h2>Referral Details:</h2>
        <p><strong>Name:</strong> ${referralName}</p>
        <p><strong>Phone:</strong> ${referralPhone}</p>
        <p><strong>Email:</strong> ${referralEmail || 'Not provided'}</p>
      `,
    });

    // Send confirmation email to referrer
    await sendEmail({
      to: referrerEmail,
      subject: 'Thank You for Your Referral',
      html: `
        <h1>Thank You for Your Referral!</h1>
        <p>Dear ${referrerName},</p>
        <p>Thank you for referring ${referralName} to ILLUSTRA. We appreciate your trust in our services.</p>
        <p>Our team will review your referral and reach out to them soon.</p>
        <p>Remember, you'll earn 30% of the signed deal value when your referral converts!</p>
        <p>Best regards,<br>The ILLUSTRA Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, referral },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting referral:', error);
    return NextResponse.json(
      { error: 'Failed to submit referral' },
      { status: 500 }
    );
  }
}