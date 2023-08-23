import { FC, memo } from "react";
import logo from "../../../assets/logo.png";
import styles from "./Logo.module.scss";

const Logo: FC = memo(() => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Sorte Sorvete" />
      <div className={styles.main}>
        <h1>Sorte Sorvete</h1>
        <h2>A sorte congelada na sua boca</h2>
      </div>
    </div>
  );
});

export default Logo;
