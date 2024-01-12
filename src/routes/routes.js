// routes.js

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Products from "./components/Products";

const routes = [
  {
    path: "/",
    component: Home,
    label: "Home", // Optional: You can include additional properties like labels
    exact: true,
  },
  {
    path: "/products",
    component: Products,
    label: "Products",
    exact: true,
  },
  {
    path: "/about",
    component: About,
    label: "About Us",
    exact: true,
  },
  {
    path: "/contact",
    component: Contact,
    label: "Contact",
    exact: true,
  },
  // Additional routes can be added here
];

export default routes;
