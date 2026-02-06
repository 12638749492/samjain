import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import { Blog } from "../../../models/Blog";

export async function GET() {
  await connectToDatabase();
  const blogs = await Blog.find({ published: true }).sort({ publishedAt: -1 }).lean();
  return NextResponse.json({ data: blogs });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, excerpt, content, category, author, featuredImage, published } = body;

  if (!title || !excerpt || !content || !category || !author) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  await connectToDatabase();
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const blog = await Blog.create({
    title,
    excerpt,
    content,
    category,
    author,
    featuredImage,
    slug,
    published: Boolean(published),
    publishedAt: published ? new Date() : null
  });

  return NextResponse.json({ data: blog });
}
