import mongoose, { Schema, type Model } from "mongoose";

export interface BlogDocument {
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  featuredImage?: string;
  category: string;
  author: string;
  published: boolean;
  publishedAt?: Date;
}

const BlogSchema = new Schema<BlogDocument>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: [String], required: true },
    featuredImage: String,
    category: { type: String, required: true },
    author: { type: String, required: true },
    published: { type: Boolean, default: false },
    publishedAt: Date
  },
  { timestamps: true }
);

export const Blog: Model<BlogDocument> =
  mongoose.models.Blog || mongoose.model<BlogDocument>("Blog", BlogSchema);
