// import { render } from '@testing-library/react';
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import guest from '../assets/img_avatar.png'

const clientId =
  "1023216195241-rbvhkertb7hlbkl1dcojam9vt53mv76t.apps.googleusercontent.com";

const Login = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');

  const onSuccess = (res) => {
    console.log("Logged in as: " + name);
    setName(res.profileObj.name);
    setUser(res.profileObj.imageUrl);
  };

  const onFailure = (res) => {
    console.log(`LOGIN FAILURE! Response: ${res}`);
  };

  const logInButton = (renderProps) => {
    return (
      <div className="logInButton" onClick={(renderProps.onClick)}>
        <img className="user" src={user ? user : guest} alt="avatar" />
      </div>
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => logInButton(renderProps)}
        onSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;

//😎
