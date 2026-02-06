import { blogSeeds } from "../data/blogs";
import { Blog } from "../models/Blog";
import { connectToDatabase } from "./mongodb";

export async function getFeaturedBlogs(limit = 3) {
  try {
    await connectToDatabase();
    const blogs = await Blog.find({ published: true })
      .sort({ publishedAt: -1 })
      .limit(limit)
      .lean();

    if (blogs.length) {
      return blogs.map((blog) => ({
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        category: blog.category,
        author: blog.author,
        date: blog.publishedAt ? blog.publishedAt.toISOString().slice(0, 10) : "",
        readTime: "5 min read"
      }));
    }
  } catch {
    return blogSeeds.slice(0, limit);
  }

  return blogSeeds.slice(0, limit);
}
