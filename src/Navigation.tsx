import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
import { betaService } from "./services/beta.service";
import { useDispatch } from "react-redux";
import { SET_SESSIONID, sessionIdSelector } from "./store/session";
import { useSelector } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();
  const {sessionId} = useSelector(sessionIdSelector)
  const getSessionId = async () => {
    if(sessionId) return 
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
