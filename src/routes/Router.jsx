import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import KidsRoom from "../pages/Rooms/KidsRoom";
import Kitchen from "../pages/Rooms/Kitchen";
import LivingRoom from "../pages/Rooms/LivingRoom";
import ShoppingCart from "../pages/ShoppingCart";

const Router = (props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      label: "Home",
      exact: true,
      errorElement: <ErrorPage />,
    },
    {
      path: "/living-room",
      element: <LivingRoom {...props} />,
      label: "Living Room",
      exact: true,
    },
    {
      path: "/kitchen",
      element: <Kitchen {...props} />,
      label: "Kitchen",
      exact: true,
    },
    {
      path: "/kids-room",
      element: <KidsRoom {...props} />,
      label: "Kid's Room",
      exact: true,
    },
    {
      path: "/shopping-cart",
      element: <ShoppingCart {...props} />,
      label: "Shopping Cart",
      exact: true,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
