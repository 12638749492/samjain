import mongoose, { Schema, type Model } from "mongoose";

export interface ServiceDocument {
  name: string;
  kannadaName: string;
  category: string;
  description?: string;
}

const ServiceSchema = new Schema<ServiceDocument>(
  {
    name: { type: String, required: true },
    kannadaName: { type: String, required: true },
    category: { type: String, required: true },
    description: String
  },
  { timestamps: true }
);

export const Service: Model<ServiceDocument> =
  mongoose.models.Service || mongoose.model<ServiceDocument>("Service", ServiceSchema);
