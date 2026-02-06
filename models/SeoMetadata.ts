import mongoose, { Schema, type Model } from "mongoose";

export interface SeoMetadataDocument {
  page: string;
  title: string;
  description: string;
  keywords?: string[];
}

const SeoMetadataSchema = new Schema<SeoMetadataDocument>(
  {
    page: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    keywords: [String]
  },
  { timestamps: true }
);

export const SeoMetadata: Model<SeoMetadataDocument> =
  mongoose.models.SeoMetadata ||
  mongoose.model<SeoMetadataDocument>("SeoMetadata", SeoMetadataSchema);
