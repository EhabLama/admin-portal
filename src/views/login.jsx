import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "../aws-exports";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import authContext from "../authContext";

Amplify.configure(awsconfig);

const LoginView = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const { setAuthenticated } = useContext(authContext);

  const grantAuth = () => {
    setAuthenticated(true);
  };

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
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
