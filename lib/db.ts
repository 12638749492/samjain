import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  console.warn('MONGODB_URI is not set. Database features will use fallback data.');
}

let cached = (global as typeof global & { mongoose?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } }).mongoose;

if (!cached) {
  cached = { conn: null, promise: null };
  (global as typeof global & { mongoose?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } }).mongoose = cached;
}

export async function connectToDatabase() {
  if (cached?.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI) {
    return null;
  }

  if (!cached?.promise) {
    cached!.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'visioncut'
    });
  }

  cached!.conn = await cached!.promise;
  return cached!.conn;
}
