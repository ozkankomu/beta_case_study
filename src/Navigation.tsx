import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
import { betaService } from "./services/beta.service";
import { useDispatch } from "react-redux";
import { SET_SESSIONID, sessionIdSelector } from "./store/session";
import { useSelector } from "react-redux";
import { SET_CART_DATA } from "./store/cart";

const Navigation = () => {
  const dispatch = useDispatch();
  const { sessionId } = useSelector(sessionIdSelector);

  const getSessionId = async () => {
    if (sessionId) return getCart();
    try {
      const data = await betaService.createSession();
      dispatch(SET_SESSIONID(data));
      getCart()
    } catch (error) {
      console.log(error);
    }
  };

  const getCart = async () => {
    try {
      const cart = await betaService.getCart();
      cart === "Cart is empty." ? dispatch(SET_CART_DATA([])) :
       dispatch(SET_CART_DATA(cart));
      console.log(cart)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSessionId();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </>
  );
};

export default Navigation;
