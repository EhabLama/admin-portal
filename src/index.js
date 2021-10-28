import React, { useState } from "react";
import ReactDOM from "react-dom";
import authContext from "./authContext";
import PrivateRoutes from "./routes/privateRoutes";
import PublicRoutes from "./routes/publicRoutes";
import "./index.css";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <authContext.Provider value={{ authenticated, setAuthenticated }}>
      {authenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </authContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
