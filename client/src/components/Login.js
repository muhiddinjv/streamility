// import { render } from '@testing-library/react';
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import "./Login.scss";

const clientId =
  "1023216195241-rbvhkertb7hlbkl1dcojam9vt53mv76t.apps.googleusercontent.com";

const Login = () => {
  const [name, setName] = useState("");
  //   const [firstName, setFirstname] = useState('');
  //   const [lastName, setLastname] = useState('');

  const onSuccess = (res) => {
    console.log("Logged in as: " + res.getBasicProfile().getName());
    setName(res.profileObj.name);
  };

  const onFailure = (res) => {
    console.log(`LOGIN FAILURE! Response: ${res}`);
  };

  const logInButton = (renderProps) => {
    return (
      <button className="logInButton" onClick={renderProps.onClick}>
        {name ? name : "login"}
      </button>
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => logInButton(renderProps)}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single-host-origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
