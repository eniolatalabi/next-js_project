import styles from "./page.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      {/* TOP SECTION — text left, image right */}
      <div className={styles.top}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>About Moonboy</h1>
          <p className={styles.desc}>
            A developer building in public, writing about AI, full-stack
            engineering, and the real process behind shipping software.
          </p>
          <p className={styles.desc}>
            No fluff. No generic tutorials. Just honest breakdowns of what gets
            built, what breaks, and what actually works.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
            alt="About Moonboy"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      </div>

      {/* BOTTOM SECTION — stats */}
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>12</span>
          <span className={styles.statLabel}>Projects</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>3</span>
          <span className={styles.statLabel}>Phases</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>1</span>
          <span className={styles.statLabel}>Blog</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
