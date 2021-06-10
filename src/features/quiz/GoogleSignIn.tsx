import React, { FunctionComponent, useState } from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";

interface GoogleSignInProps {
  //   loginSuccess: (
  //     response: GoogleLoginResponse | GoogleLoginResponseOffline
  //   ) => void;
}

export const GoogleSignIn: FunctionComponent<GoogleSignInProps> = (
  {
    //   loginSuccess,
  }
) => {
  const [loginFailed, setLoginFailed] = useState<boolean>();
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const clientId =
    "843337520358-orksjjfgg1v13982b6n0pv3mis8htmoa.apps.googleusercontent.com";
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
          clientId={clientId}
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
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
};
//

// function Login() {

//     const onLoginFailure = (res) => {
//         console.log('Login Failed:', res);
//     };

//

//     return (
//         <div className="min-h-screen flex items-center justify-center">
//                 <GoogleLogin
//
//                     buttonText="Sign In"
//                     onSuccess={onLoginSuccess}
//                     onFailure={onLoginFailure}
//                     cookiePolicy={'single_host_origin'}
//                     isSignedIn={true}

//         </div>
//     );
// }

export default GoogleSignIn;
