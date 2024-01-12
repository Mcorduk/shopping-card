import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({ navLinks = [] }) {
  return (
    <nav>
      <ul className={styles.wrapper}>
        {navLinks.map((link, index) => (
          <li key={index}>
            {/* Using NavLink isActive from react-router-dom library
            to give class to the active and non active navigation */}
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
