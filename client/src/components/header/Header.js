import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth';
import "./Header.scss";
class Header extends PureComponent {
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
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default Header
