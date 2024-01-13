import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import ProductPage from "../pages/ProductPage/ProductPage";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCartPage";

const Router = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/living-room"
        element={<ProductPage room="living-room" {...props} />}
      />
      <Route
        path="/kitchen"
        element={<ProductPage room="kitchen" {...props} />}
      />
      <Route
        path="/office"
        element={<ProductPage room="office" {...props} />}
      />
      <Route path="/shopping-cart" element={<ShoppingCart {...props} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

Router.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
};

export default Router;
