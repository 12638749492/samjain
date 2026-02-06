import mongoose, { Schema, type Model } from "mongoose";

export interface PortfolioItemDocument {
  title: string;
  category: string;
  image: string;
  link?: string;
  description?: string;
}

const PortfolioItemSchema = new Schema<PortfolioItemDocument>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    link: String,
    description: String
  },
  { timestamps: true }
);

export const PortfolioItem: Model<PortfolioItemDocument> =
  mongoose.models.PortfolioItem ||
  mongoose.model<PortfolioItemDocument>("PortfolioItem", PortfolioItemSchema);
