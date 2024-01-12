import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import KidsRoom from "../pages/KidsRoom";
import Kitchen from "../pages/Kitchen";
import LivingRoom from "../pages/LivingRoom";

const Router = () => {
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
      element: <LivingRoom />,
      label: "Living Room",
      exact: true,
    },
    {
      path: "/kitchen",
      element: <Kitchen />,
      label: "Kitchen",
      exact: true,
    },
    {
      path: "/kids-room",
      element: <KidsRoom />,
      label: "Kid's Room",
      exact: true,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
