import mongoose, { Schema } from 'mongoose';

export interface ISeoMetadata {
  page: string;
  title: string;
  description: string;
  keywords: string[];
  createdAt: Date;
  updatedAt: Date;
}

const SeoMetadataSchema = new Schema<ISeoMetadata>(
  {
    page: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    keywords: { type: [String], default: [] }
  },
  { timestamps: true }
);

export default mongoose.models.SeoMetadata || mongoose.model<ISeoMetadata>('SeoMetadata', SeoMetadataSchema);
