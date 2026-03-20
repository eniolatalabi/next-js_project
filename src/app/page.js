import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { getPosts } from "@/lib/data";
import PostCard from "@/components/postCard/PostCard";

const Homepage = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Building in public. <br /> Learning out loud.
          </h1>
          <p className={styles.heroDesc}>
            A blog for developers figuring it out — AI, full-stack, mobile, and
            everything in between.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/blog" className={styles.btnPrimary}>
              Read the Blog
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              Get in Touch
            </Link>
          </div>
          <div className={styles.heroSocials}>
            <a
              href="https://github.com/eniolatalabi"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/eniolasolomontalabi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/moonboy_dev/"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
            alt="Developer working"
            fill
            className={styles.image}
          />
        </div>
      </div>

      {/* FEATURED POSTS */}
      <div className={styles.featured}>
        <h2 className={styles.featuredTitle}>
          What I&apos;m Building &amp; Thinking
        </h2>
        <div className={styles.postList}>
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
