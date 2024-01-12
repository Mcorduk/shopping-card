import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={styles.wrapper}>
      <h1>NobleNest Living</h1>
      <Navbar {...props} />
    </header>
  );
}
