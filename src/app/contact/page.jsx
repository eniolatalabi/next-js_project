import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "@/components/contactForm/ContactForm";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      {/* LEFT — image */}
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg"
          alt="Contact"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
        />
      </div>

      {/* RIGHT — form */}
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.desc}>
          Have a question, a project idea, or just want to say hi? Drop a
          message and I will get back to you.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
