import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import { SeoMetadata } from "../../../models/SeoMetadata";

export async function GET() {
  await connectToDatabase();
  const seo = await SeoMetadata.find().lean();
  return NextResponse.json({ data: seo });
}
