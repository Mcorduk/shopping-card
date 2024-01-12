import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  // FIXME I am repeating data that can be found in routes
  const navigationLinks = [
    { to: "/", label: "HOME" },
    { to: "/living-room", label: "LIVING ROOM" },
    { to: "/kitchen", label: "KITCHEN" },
    { to: "/kids-room", label: "KID'S ROOM" },
  ];
  return (
    <header className={styles.wrapper}>
      <h1>NobleNest Living</h1>
      <Navbar navLinks={navigationLinks} />
    </header>
  );
}
