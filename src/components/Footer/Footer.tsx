import styles from "./Footer.module.scss";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/cristijung"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsGithub /> @cristijung
      </a>
      <p>{new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
