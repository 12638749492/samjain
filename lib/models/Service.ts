import mongoose, { Schema } from 'mongoose';

export interface IServiceItem {
  name: string;
  translation: string;
}

export interface IServiceCategory {
  title: string;
  description: string;
  items: IServiceItem[];
}

export interface IService {
  category: string;
  icon: string;
  summary: string;
  items: IServiceItem[];
  createdAt: Date;
  updatedAt: Date;
}

const ServiceItemSchema = new Schema<IServiceItem>({
  name: { type: String, required: true },
  translation: { type: String, required: true }
});

const ServiceSchema = new Schema<IService>(
  {
    category: { type: String, required: true },
    icon: { type: String, required: true },
    summary: { type: String, required: true },
    items: { type: [ServiceItemSchema], default: [] }
  },
  { timestamps: true }
);

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);
