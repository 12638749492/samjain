import mongoose, { Schema } from 'mongoose';

export interface IPortfolio {
  title: string;
  category: string;
  image: string;
  instagramUrl: string;
  alt: string;
  createdAt: Date;
  updatedAt: Date;
}

const PortfolioSchema = new Schema<IPortfolio>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    instagramUrl: { type: String, required: true },
    alt: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.models.Portfolio || mongoose.model<IPortfolio>('Portfolio', PortfolioSchema);
