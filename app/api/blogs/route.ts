import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Blog from '@/lib/models/Blog';
import { slugify } from '@/lib/utils';

export async function GET() {
  await connectToDatabase();
  const posts = await Blog.find({}).sort({ createdAt: -1 });
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  await connectToDatabase();
  const payload = await request.json();
  const slug = slugify(payload.title);

  const post = await Blog.create({
    ...payload,
    slug,
    status: payload.status || 'draft'
  });

  return NextResponse.json(post, { status: 201 });
}
