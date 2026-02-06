import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '@/lib/db';
import User from '@/lib/models/User';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  await connectToDatabase();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const token = jwt.sign({ sub: user._id, role: user.role }, process.env.JWT_SECRET || 'visioncut', {
    expiresIn: '2h'
  });

  return NextResponse.json({ token });
}
