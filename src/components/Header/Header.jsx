import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import ShoppingCartImage from "/public/cart.png";

export default function Header() {
  // FIXME I am repeating data that can be found in routes
  const navigationLinks = [
    { to: "/", label: "HOME" },
    { to: "/living-room", label: "LIVING ROOM" },
    { to: "/kitchen", label: "KITCHEN" },
    { to: "/kids-room", label: "KID'S ROOM" },
    {
      to: "/shopping-cart",
      label: (
        // Insterting the cart Png in Nav here by directly importing it
        <img
          className={styles.cart}
          src={ShoppingCartImage}
          alt="Shopping Cart"
        />
      ),
    },
  ];
  return (
    <header className={styles.wrapper}>
      <h1>NobleNest Living</h1>
      <Navbar navLinks={navigationLinks} />
    </header>
  );
}
