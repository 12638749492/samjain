import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Service from '@/lib/models/Service';

export async function GET() {
  await connectToDatabase();
  const services = await Service.find({}).sort({ createdAt: -1 });
  return NextResponse.json(services);
}

export async function POST(request: Request) {
  await connectToDatabase();
  const payload = await request.json();
  const service = await Service.create(payload);
  return NextResponse.json(service, { status: 201 });
}
