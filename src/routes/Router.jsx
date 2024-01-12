import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import KidsRoom from "../pages/Rooms/KidsRoom";
import Kitchen from "../pages/Rooms/Kitchen";
import LivingRoom from "../pages/Rooms/LivingRoom";
import ShoppingCart from "../pages/ShoppingCart";

const Router = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/living-room" element={<LivingRoom {...props} />} />
      <Route path="/kitchen" element={<Kitchen {...props} />} />
      <Route path="/kids-room" element={<KidsRoom {...props} />} />
      <Route path="/shopping-cart" element={<ShoppingCart {...props} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

Router.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
};

export default Router;
