const mockPosts = [
  {
    _id: "1",
    title: "Why I Left Tutorial Hell and Started Building",
    desc: "The moment I stopped watching and started shipping — what changed, what broke, and what I learned.",
    img: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    slug: "left-tutorial-hell",
    createdAt: "2026-03-10",
    catSlug: "engineering",
  },
  {
    _id: "2",
    title: "Building a Full-Stack Dashboard in 4 Weeks",
    desc: "Next.js 14, MongoDB, Auth.js — the decisions, the mistakes, and the architecture that held up.",
    img: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
    slug: "fullstack-dashboard-4-weeks",
    createdAt: "2026-03-14",
    catSlug: "engineering",
  },
  {
    _id: "3",
    title: "What African Developers Need to Know About the EU Job Market",
    desc: "Not the generic advice. The actual numbers, the visa reality, and what your portfolio needs to say.",
    img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    slug: "african-devs-eu-market",
    createdAt: "2026-03-17",
    catSlug: "career",
  },
];

export const getPosts = async () => {
  // Week 2 — replace with: return await Post.find().limit(3).lean();
  return mockPosts;
};

export const getPostBySlug = async (slug) => {
  // Week 2 — replace with: return await Post.findOne({ slug }).lean();
  return mockPosts.find((post) => post.slug === slug) ?? null;
};
