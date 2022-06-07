import React, { PureComponent } from "react";
import Login from "./Login";
import Logout from "./Logout";
import "./Header.scss";
import avatarImage from "../../assets/user.png";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
import { gapi } from "gapi-script";
const clientId =
  "1023216195241-rbvhkertb7hlbkl1dcojam9vt53mv76t.apps.googleusercontent.com";

class GoogleAuth extends PureComponent {
  state = {
    user: null,
    // isSignedIn: null,
  };

  onLoginSuccess = (res) => {
    this.setState({ user: res.profileObj.imageUrl });
  };

  onLoginFailure = (res) => {
    console.log(`LOGIN FAILURE: ${res.error}`);
  };

  logInButton = (renderProps) => {
    const { user } = this.state;
    return (
      <div className="logInButton" onClick={renderProps.onClick}>
        <img className="user" src={user ? user : avatarImage} alt="avatar" />
      </div>
    );
  };

  onLogoutSuccess = () => {
    this.setState({ user: avatarImage });
    console.log("Logout successful!");
  };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  componentDidMount() {
    gapi.load("client:auth2", () => {
      gapi.auth2
        .init({
          clientId: clientId,
          scope: "",
        })
        .then(() => {
          this.auth = gapi.auth2.getAuthInstance() || {};
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  // let accessToken = gapi.auth.getToken().access_token;
  render() {
    return (
      <div className="right-menu">
        <Login
          onSuccess={this.onLoginSuccess}
          onFailure={this.onLoginFailure}
          loginBtn={this.logInButton}
        />
        <Logout onLogout={this.onLogoutSuccess} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
