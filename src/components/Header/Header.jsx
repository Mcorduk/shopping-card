import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  const navigationLinks = [
    { to: "/home", label: "HOME" },
    { to: "/living-room", label: "LIVING ROOM" },
    { to: "/kitchen", label: "KITCHEN" },
    { to: "/kids-room", label: "KID'S ROOM" },
  ];
  return (
    <header>
      <Navbar navLinks={navigationLinks} />
    </header>
  );
}
