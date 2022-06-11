import { GoogleLogout } from "react-google-login";
import logout from '../../assets/logout1.jpg'

const clientId =
  "1023216195241-rbvhkertb7hlbkl1dcojam9vt53mv76t.apps.googleusercontent.com";

const Logout = (props) => {
  const logOutButton = (renderProps) => {
    return (
      <div  onClick={renderProps.onClick}>
        {/* <i className="sign-out icon"/> */}
        <img className="logout"  src={logout} alt="avatar" />
      </div>
    );
  };

  return (
    <div className="logOutButton">
      <GoogleLogout
        render={(renderProps) => logOutButton(renderProps)}
        clientId={clientId}
        onLogoutSuccess={props.onLogout}
      />
    </div>
  );
}

export default Logout;
