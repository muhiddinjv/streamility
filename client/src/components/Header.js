import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';

import {gapi} from 'gapi-script';
const clientId = "1023216195241-rbvhkertb7hlbkl1dcojam9vt53mv76t.apps.googleusercontent.com";

const Header = () => {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope:""
      })
    }
    gapi.load('client:auth2', start)
  })
  // let accessToken = gapi.auth.getToken().access_token;
  return (
    <div className='ui secondary pointing menu'>
        <Link to='/' className='item'>Streamy</Link>
        <div className="right menu">
            <Link to='/' className='item'>All Streams</Link>
            <Login/>
            <Logout/>
        </div>
        
    </div>
  )
}

export default Header