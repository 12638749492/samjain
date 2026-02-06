import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import { ContactMessage } from "../../../models/ContactMessage";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  await connectToDatabase();
  const contact = await ContactMessage.create({ name, email, company, message });

  return NextResponse.json({ data: contact });
}
