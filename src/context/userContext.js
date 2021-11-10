import {
  createContext
} from "react";

const userContext = createContext({
  userInfo: "",
  setUserInfo: () => {},
});

export default userContext;