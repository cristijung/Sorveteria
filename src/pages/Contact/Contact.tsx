import CardContact from "../../components/CartContact/CartContact";
import styles from "./Contact.module.scss";
import { FC } from "react";
const Contact: FC = () => {
  return (
    <div className={styles.contact}>
      <h2>Entre em contato</h2>
      <CardContact/>
      
    </div>
  );
};

export default Contact;
