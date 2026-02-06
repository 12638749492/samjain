import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/mongodb";
import { Blog } from "../../../../models/Blog";

interface RouteProps {
  params: { slug: string };
}

export async function GET(_request: Request, { params }: RouteProps) {
  await connectToDatabase();
  const blog = await Blog.findOne({ slug: params.slug }).lean();

  if (!blog) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ data: blog });
}

export async function PATCH(request: Request, { params }: RouteProps) {
  const body = await request.json();
  await connectToDatabase();

  const blog = await Blog.findOneAndUpdate({ slug: params.slug }, body, {
    new: true
  }).lean();

  if (!blog) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ data: blog });
}

export async function DELETE(_request: Request, { params }: RouteProps) {
  await connectToDatabase();
  const blog = await Blog.findOneAndDelete({ slug: params.slug }).lean();

  if (!blog) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
