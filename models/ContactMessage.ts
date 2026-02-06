import mongoose, { Schema, type Model } from "mongoose";

export interface ContactMessageDocument {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const ContactMessageSchema = new Schema<ContactMessageDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: String,
    message: { type: String, required: true }
  },
  { timestamps: true }
);

export const ContactMessage: Model<ContactMessageDocument> =
  mongoose.models.ContactMessage ||
  mongoose.model<ContactMessageDocument>("ContactMessage", ContactMessageSchema);
