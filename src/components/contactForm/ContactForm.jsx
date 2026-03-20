"use client";

import styles from "./contactForm.module.css";

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Name" className={styles.input} required />
      <input
        type="email"
        placeholder="Email"
        className={styles.input}
        required
      />
      <textarea
        placeholder="Message"
        className={styles.textarea}
        rows={8}
        required
      />
      <button type="button" className={styles.button}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
