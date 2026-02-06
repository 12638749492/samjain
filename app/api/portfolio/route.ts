import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import { PortfolioItem } from "../../../models/PortfolioItem";

export async function GET() {
  await connectToDatabase();
  const items = await PortfolioItem.find().lean();
  return NextResponse.json({ data: items });
}
