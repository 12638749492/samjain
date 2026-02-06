import mongoose, { Schema } from 'mongoose';

export interface IBlogSection {
  heading: string;
  content: string;
}

export interface IBlog {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  author: string;
  readTime: string;
  status: 'draft' | 'published';
  sections: IBlogSection[];
  createdAt: Date;
  updatedAt: Date;
}

const BlogSectionSchema = new Schema<IBlogSection>({
  heading: { type: String, required: true },
  content: { type: String, required: true }
});

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    featuredImage: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    readTime: { type: String, required: true },
    status: { type: String, default: 'draft' },
    sections: { type: [BlogSectionSchema], default: [] }
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
