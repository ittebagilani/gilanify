import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/email';
import { format } from 'date-fns';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { date, timeSlot, firstName, lastName, email } = data;

    // Validate required fields
    if (!date || !timeSlot || !firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if this time slot is already booked
    const existingAppointment = await prisma.appointment.findFirst({
      where: {
        timeSlot,
        date: {
          // Find appointments on the same day
          gte: new Date(new Date(date).setHours(0, 0, 0, 0)),
          lt: new Date(new Date(date).setHours(23, 59, 59, 999)),
        },
      },
    });

    if (existingAppointment) {
      return NextResponse.json(
        { error: 'This time slot is already booked' },
        { status: 409 }
      );
    }

    // Create the appointment in the database
    const appointment = await prisma.appointment.create({
      data: {
        date: new Date(date),
        timeSlot,
        firstName,
        lastName,
        email,
      },
    });

    // Send email notification to admin
    await sendEmail({
      to: 'itteba@gilanify.com',
      subject: 'New Consultation Booking',
      html: `
        <h1>New Consultation Booking</h1>
        <p><strong>Date:</strong> ${format(new Date(date), 'PPP')}</p>
        <p><strong>Time:</strong> ${timeSlot}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    // Send confirmation email to client
    await sendEmail({
      to: email,
      subject: 'Your Consultation Booking Confirmation',
      html: `
        <h1>Booking Confirmation</h1>
        <p>Dear ${firstName},</p>
        <p>Your consultation has been booked for ${format(new Date(date), 'PPP')} at ${timeSlot}.</p>
        <p>We're looking forward to discussing your project!</p>
        <p>Best regards,<br>The Gilanify Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, appointment },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error booking appointment:', error);
    return NextResponse.json(
      { error: 'Failed to book appointment' },
      { status: 500 }
    );
  }
}