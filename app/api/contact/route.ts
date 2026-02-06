import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Contact from '@/lib/models/Contact';

export async function GET() {
  await connectToDatabase();
  const messages = await Contact.find({}).sort({ createdAt: -1 });
  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  await connectToDatabase();
  const payload = await request.json();
  const message = await Contact.create(payload);
  return NextResponse.json(message, { status: 201 });
}
