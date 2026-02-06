import { connectToDatabase } from './db';
import Blog from './models/Blog';
import Portfolio from './models/Portfolio';
import Service from './models/Service';
import { blogPosts, portfolioItems, serviceCategories } from './data';

export async function getServices() {
  const connection = await connectToDatabase();
  if (!connection) {
    return serviceCategories;
  }
  const services = await Service.find({}).lean();
  return services.length ? services : serviceCategories;
}

export async function getPortfolioItems() {
  const connection = await connectToDatabase();
  if (!connection) {
    return portfolioItems;
  }
  const items = await Portfolio.find({}).lean();
  return items.length ? items : portfolioItems;
}

export async function getBlogPosts(limit?: number) {
  const connection = await connectToDatabase();
  if (!connection) {
    return limit ? blogPosts.slice(0, limit) : blogPosts;
  }
  const query = Blog.find({ status: 'published' }).sort({ createdAt: -1 });
  if (limit) {
    query.limit(limit);
  }
  const posts = await query.lean();
  return posts.length ? posts : blogPosts;
}

export async function getBlogBySlug(slug: string) {
  const connection = await connectToDatabase();
  if (!connection) {
    return blogPosts.find((post) => post.slug === slug) || null;
  }
  const post = await Blog.findOne({ slug }).lean();
  return post || blogPosts.find((item) => item.slug === slug) || null;
}
