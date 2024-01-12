import PropTypes from "prop-types";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import styles from "./Navbar.module.css";

export default function Navbar() {
  // const [cartItems, setCartItems] = useState([]);

  const navigationLinks = [
    {
      to: "/",
      label: "HOME",
    },
    {
      to: "/living-room",
      label: "LIVING ROOM",
    },
    {
      to: "/kitchen",
      label: "KITCHEN",
    },
    {
      to: "/kids-room",
      label: "KID'S ROOM",
    },
  ];

  return (
    <nav>
      <ul className={styles.wrapper}>
        {navigationLinks.map((link, index) => (
          <li key={index}>
            {/* Using NavLink isActive from react-router-dom library
            to give class to the active and non active navigation links */}
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-link" : "non-active-link"
              }
              to={link.to}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li>
          <Cart />
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
