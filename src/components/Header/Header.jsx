import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    // App has a single one of these, This is the Header of the app
    //Navbar is only the links on the right side including the cart
    <header className={styles.wrapper}>
      <h1>NobleNest Living</h1>
      <Navbar {...props} />
    </header>
  );
}
