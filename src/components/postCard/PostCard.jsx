import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={post.img} alt={post.title} fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.category}>{post.catSlug}</span>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
