import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import styles from "./Navbar.module.css";

export default function Navbar(props) {
  //This component is reusable, adjust below array for new projects
  //Remove Cart component from the return statement for non e-commerce projects
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
      to: "/office",
      label: "OFFICE",
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
                navData.isActive ? styles["active-link"] : "non-active-link"
              }
              to={link.to}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li>
          <Cart {...props} />
        </li>
      </ul>
    </nav>
  );
}
