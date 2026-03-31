import connectDB from "./mongodb";
import Post from "@/models/Post";

export const getPosts = async () => {
  await connectDB();
  const posts = await Post.find().sort({ createdAt: -1 }).limit(3).lean();
  return posts;
};

export const getPostBySlug = async (slug) => {
  await connectDB();
  const post = await Post.findOne({ slug }).lean();
  return post ?? null;
};
