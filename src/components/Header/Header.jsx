import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

export default function Header({ props }) {
  // FIXME I am repeating data that can be found in routes
  const navigationLinks = [
    { to: "/", label: "HOME" },
    { to: "/living-room", label: "LIVING ROOM" },
    { to: "/kitchen", label: "KITCHEN" },
    { to: "/kids-room", label: "KID'S ROOM" },
    {
      to: "/shopping-cart",
      label: <Cart {...props} />,
    },
  ];
  return (
    <header className={styles.wrapper}>
      <h1>NobleNest Living</h1>
      <Navbar navLinks={navigationLinks} />
    </header>
  );
}
