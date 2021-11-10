import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "../aws-exports";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import authContext from "../context/authContext";
import userContext from "../context/userContext";
import { Auth } from "aws-amplify";

Amplify.configure(awsconfig);

const LoginView = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const { setAuthenticated } = useContext(authContext);
  const { setUserInfo } = useContext(userContext);

  async function grantAuth() {
    setAuthenticated(true);
    await Auth.currentUserInfo().then((result) => {
      setUserInfo(result.username);
    });

    Auth.currentAuthenticatedUser().then((data) => {
      const group =
        data.signInUserSession.accessToken.payload["cognito:groups"];
      group && group[0] === "Admins"
        ? console.log("User Authorized")
        : resetUser();
    });
  }

  const authChange = () => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  };

  async function resetUser() {
    await Auth.signOut();
    setAuthenticated(false);
    alert("User Unauthorized, Only user with admin roles can login");
  }

  React.useEffect(() => {
    authChange();
  }, []);

  return authState === AuthState.SignedIn && user ? (
    (grantAuth(), (<Redirect to="/" />))
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignIn slot="sign-in">
        <div slot="secondary-footer-content"></div>
      </AmplifySignIn>
    </AmplifyAuthenticator>
  );
};

export default LoginView;
