import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Portfolio from '@/lib/models/Portfolio';

export async function GET() {
  await connectToDatabase();
  const items = await Portfolio.find({}).sort({ createdAt: -1 });
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  await connectToDatabase();
  const payload = await request.json();
  const item = await Portfolio.create(payload);
  return NextResponse.json(item, { status: 201 });
}
