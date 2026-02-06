import mongoose, { Schema, type Model } from "mongoose";

export interface BlogCategoryDocument {
  name: string;
  slug: string;
  description?: string;
}

const BlogCategorySchema = new Schema<BlogCategoryDocument>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: String
  },
  { timestamps: true }
);

export const BlogCategory: Model<BlogCategoryDocument> =
  mongoose.models.BlogCategory ||
  mongoose.model<BlogCategoryDocument>("BlogCategory", BlogCategorySchema);
