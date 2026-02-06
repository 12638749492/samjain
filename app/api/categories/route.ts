import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Category from '@/lib/models/Category';
import { slugify } from '@/lib/utils';

export async function GET() {
  await connectToDatabase();
  const categories = await Category.find({}).sort({ name: 1 });
  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  await connectToDatabase();
  const payload = await request.json();
  const category = await Category.create({
    ...payload,
    slug: slugify(payload.name)
  });
  return NextResponse.json(category, { status: 201 });
}
