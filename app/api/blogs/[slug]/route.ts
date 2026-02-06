import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Blog from '@/lib/models/Blog';
import { slugify } from '@/lib/utils';

interface RouteProps {
  params: { slug: string };
}

export async function GET(request: Request, { params }: RouteProps) {
  await connectToDatabase();
  const post = await Blog.findOne({ slug: params.slug });
  if (!post) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PUT(request: Request, { params }: RouteProps) {
  await connectToDatabase();
  const payload = await request.json();
  const slug = payload.title ? slugify(payload.title) : params.slug;

  const post = await Blog.findOneAndUpdate({ slug: params.slug }, { ...payload, slug }, { new: true });
  if (!post) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function DELETE(request: Request, { params }: RouteProps) {
  await connectToDatabase();
  const post = await Blog.findOneAndDelete({ slug: params.slug });
  if (!post) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ message: 'Deleted' });
}
