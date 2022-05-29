// import { render } from '@testing-library/react';
import { GoogleLogin } from "react-google-login";

const clientId =
  "1023216195241-rbvhkertb7hlbkl1dcojam9vt53mv76t.apps.googleusercontent.com";

const Login = (props) => {

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => props.loginBtn(renderProps)}
        onSuccess={props.onSuccess}
        onFailure={props.onFailure}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;

//😎
