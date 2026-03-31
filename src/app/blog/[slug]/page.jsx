import styles from "./page.module.css";
import Image from "next/image";
import { getPostBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

const SinglePostPage = async ({ params }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className={styles.container}>
      {/* TOP — post header */}
      <div className={styles.top}>
        <div className={styles.info}>
          <Link href="/blog" className={styles.backButton}>
            ← Back to Blog
          </Link>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span className={styles.category}>{post.catSlug}</span>
            <span className={styles.date}>
              {new Date(post.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <p className={styles.desc}>{post.desc}</p>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={post.img}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      </div>

      {/* BOTTOM — post content */}
      <div className={styles.content}>
        <p className={styles.placeholder}>
          Full post content comes when we connect MongoDB in Week 2. For now
          this is a placeholder.
        </p>
      </div>
    </div>
  );
};

export default SinglePostPage;
