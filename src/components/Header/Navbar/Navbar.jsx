import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({ navLinks = [] }) {
  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
