import { GoogleLogout } from "react-google-login";

const clientId =
  "1023216195241-rbvhkertb7hlbkl1dcojam9vt53mv76t.apps.googleusercontent.com";

function Logout() {
  const onLogoutSuccess = (res) => {
    console.log("Logout successful!");
  };

  const logOutButton = (renderProps) => {
    return (
      <button className="logInButton" onClick={renderProps.onClick}>
        logout
      </button>
    );
  };

  return (
    <div className="logOutButton">
      <GoogleLogout
        render={(renderProps) => logOutButton(renderProps)}
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
}

export default Logout;
