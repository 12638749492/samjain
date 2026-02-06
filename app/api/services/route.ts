import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import { Service } from "../../../models/Service";

export async function GET() {
  await connectToDatabase();
  const services = await Service.find().lean();
  return NextResponse.json({ data: services });
}
