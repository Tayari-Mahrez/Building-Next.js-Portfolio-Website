import ContactForm from "../-components/ContactForm";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <div  className={styles.page}>
      <h1>Contact Me</h1>
      <ContactForm />
    </div>
  );
}