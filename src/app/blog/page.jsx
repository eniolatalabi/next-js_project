import styles from "./page.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Blog</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
