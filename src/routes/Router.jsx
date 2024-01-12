import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import KidsRoom from "../pages/Rooms/KidsRoom";
import Kitchen from "../pages/Rooms/Kitchen";
import LivingRoom from "../pages/Rooms/LivingRoom";
import ShoppingCart from "../pages/ShoppingCart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/living-room" element={<LivingRoom />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/kids-room" element={<KidsRoom />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
