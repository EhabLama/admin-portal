import React, {
  useState
} from "react";
import ReactDOM from "react-dom";
import authContext from "./context/authContext";
import userContext from "./context/userContext";
import PrivateRoutes from "./routes/privateRoutes";
import PublicRoutes from "./routes/publicRoutes";
import "./index.css";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState();

  return ( <
    authContext.Provider value = {
      {
        authenticated,
        setAuthenticated
      }
    } >
    <
    userContext.Provider value = {
      {
        userInfo,
        setUserInfo
      }
    } > {
      authenticated ? < PrivateRoutes / > : < PublicRoutes / >
    } <
    /userContext.Provider> <
    /authContext.Provider>
  );
};

ReactDOM.render( < App / > , document.getElementById("root"));