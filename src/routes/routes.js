// routes.js

import Home from "./pages/Home";
import KidsRoom from "./pages/KidsRoom";
import Kitchen from "./pages/Kitchen";
import LivingRoom from "./pages/LivingRoom";

const routes = [
  {
    path: "/",
    component: Home,
    label: "Home",
    exact: true,
  },
  {
    path: "/living-rrom",
    page: LivingRoom,
    label: "Living Room",
    exact: true,
  },
  {
    path: "/kitchen",
    component: Kitchen,
    label: "Kitchen",
    exact: true,
  },
  {
    path: "/kids-room",
    component: KidsRoom,
    label: "Kid's Room",
    exact: true,
  },
];

export default routes;
