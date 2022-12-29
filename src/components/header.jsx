import React, { useTransition } from 'react'

import {Routes, Route, useNavigate} from 'react-router-dom';
import signin from '../login/signin';
const header = () => {
  

  return (
    <div className="header-container">
        <div className="logo">InvestX</div>
        <div className="menu">
            <div className="menu-links">
                <a href="/" onClick={signin}>App</a>
                <a href="/demo">Demo</a>
                <a href="/about">About Us</a>
                <a href="/login">Sign In</a>
            </div>
        </div>
        {/* <div className="wallet-btn">
            <button className="primary" href="/login">
              Login In
            </button>
        </div> */}

    </div>

    
  )
}



export default header;

