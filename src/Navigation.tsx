import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
import { betaService } from "./services/beta.service";
import { useDispatch } from "react-redux";
import { SET_SESSIONID } from "./store/session";

const Navigation = () => {
  const dispatch = useDispatch();

  const getSessionId = async () => {
    try {
      const data = await betaService.createSession();
      dispatch(SET_SESSIONID(data));
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
