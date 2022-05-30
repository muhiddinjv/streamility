import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import "./Header.scss";
import guest from '../../assets/user.png'


import {gapi} from 'gapi-script';
const clientId = "1023216195241-rbvhkertb7hlbkl1dcojam9vt53mv76t.apps.googleusercontent.com";

const Header = () => {
  const [user, setUser] = useState('');
  const [signedIn, setSignedIn] = useState('');

  const onLoginSuccess = (res) => {
    setUser(res.profileObj.imageUrl);
  };

  const onLoginFailure = (res) => {
    alert(`LOGIN FAILURE: ${res.error}`);
  };

  const logInButton = (renderProps) => {
    return (
      <div className="logInButton" onClick={(renderProps.onClick)}>
        <img className="user" src={user ? user : guest} alt="avatar" />
      </div>
    );
  };

  const onLogoutSuccess = () => {
    setUser(guest); alert('Logout successful!'); 
  };

  useEffect(()=>{
    function start(){
      gapi.auth2.init({
        clientId: clientId,
        scope:""
      }).then((res)=>{
        setSignedIn(res.isSignedIn.get())
      })
    }
    gapi.load('client:auth2', start)
  })
  // let accessToken = gapi.auth.getToken().access_token;
  console.log('signedIn :>> ', signedIn);
  return (
    <div className='ui secondary pointing menu'>
        <Link to='/' className='item'>Streamy</Link>
        <div className="right menu">
            <Link to='/' className='item'>All Streams</Link>
            <div className='right-menu'>
              <Login onSuccess={onLoginSuccess} onFailure={onLoginFailure} loginBtn={logInButton}/>
              <Logout onLogout={onLogoutSuccess}/>
            </div>
        </div>
        
    </div>
  )
}

export default Header