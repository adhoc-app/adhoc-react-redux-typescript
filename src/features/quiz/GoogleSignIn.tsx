import React, { FunctionComponent, useState } from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";

interface GoogleSignInProps {}

export const GoogleSignIn: FunctionComponent<GoogleSignInProps> = () => {
  const [loginFailed, setLoginFailed] = useState<boolean>();
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };
  const onLoginSuccess = (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log("Login Success:", res);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  return (
    <div className="text-center mb-4">
      <h1 className="h3 mb-3 font-weight-normal">Welcome to Library Portal</h1>
      {loginFailed && <p>"Could not sign you in! Try again."</p>}
      <p>Sign In</p>
      {showloginButton ? (
        <GoogleLogin
          clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
          buttonText="Google"
          onSuccess={onLoginSuccess}
          onFailure={(response: any) => {
            setLoginFailed(true);
          }}
          cookiePolicy={"single_host_origin"}
          responseType="code,token"
        />
      ) : null}
      {showlogoutButton ? (
        <GoogleLogout
          clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
};

export default GoogleSignIn;
