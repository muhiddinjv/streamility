import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import "./Header.scss";
import guest from "../../assets/user.png";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
import { gapi } from "gapi-script";
const clientId =
  "1023216195241-rbvhkertb7hlbkl1dcojam9vt53mv76t.apps.googleusercontent.com";

class Header extends Component {
  state = {
    user: null,
    isSignedIn: null,
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
        <img className="user" src={user ? user : guest} alt="avatar" />
      </div>
    );
  };

  onLogoutSuccess = () => {
    this.setState({ user: guest });
    console.log("Logout successful!");
  };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  componentDidMount() {
    gapi.load('client:auth2',()=>{
      gapi.auth2
      .init({
        clientId: clientId,
        scope: "",
      })
      .then(() => {
        this.auth = gapi.auth2.getAuthInstance() || {};
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    })
  }
  // let accessToken = gapi.auth.getToken().access_token;
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streamy
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <div className="right-menu">
            <Login
              onSuccess={this.onLoginSuccess}
              onFailure={this.onLoginFailure}
              loginBtn={this.logInButton}
            />
            <Logout onLogout={this.onLogoutSuccess} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signIn, signOut })(Header);
