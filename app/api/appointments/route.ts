import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Assuming you're using Prisma

export async function GET() {
  try {
    // Fetch all appointments from the database
    const appointments = await prisma.appointment.findMany({
      select: {
        id: true,
        date: true,
        timeSlot: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });

    return NextResponse.json({ appointments }, { status: 200 });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}