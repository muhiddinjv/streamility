import { GoogleLogout } from "react-google-login";

const clientId =
  "1023216195241-rbvhkertb7hlbkl1dcojam9vt53mv76t.apps.googleusercontent.com";

function Logout() {
  const onLogoutSuccess = (res) => {
    alert("Logout successful!");
  };

  const logOutButton = (renderProps) => {
    return (
      <div className="logout" onClick={renderProps.onClick}>
        X
      </div>
    );
  };

  return (
    <div className="logOutButton">
      <GoogleLogout
        render={(renderProps) => logOutButton(renderProps)}
        clientId={clientId}
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
}

export default Logout;
