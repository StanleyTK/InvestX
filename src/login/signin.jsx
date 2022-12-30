import React, { useTransition, useRef, useState, useEffect } from 'react'

const SignIn = () => {
  


  return (
    <div className="home">

      <div className="header-container">
          <div className="logo">InvestX</div>
          <div className="menu">
              <div className="menu-links">
                  <a href="/">App</a>
                  <a href="/demo">Demo</a>
                  <a href="/about">About Us</a>
                  <a href="/login">Sign In</a>
                  <a href="/signup">Sign Up</a>
              </div>
          </div>
          

      </div>

      <div className="title-section-container">
          <h1>
            Login
          </h1>
      </div>

      <form>
        <label htmlFor="username">Username: </label>
        <input 
          type="text" 
          id="username"
          autoComplete="on"
        />
      
      </form>

      <form>
        <label htmlFor="username">Password: </label>
        <input 
          type="text" 
          id="password"
          autoComplete="off"
        />
      
      </form>
     
      


      <div className="footer-container">
        <div className="footer-copyright">
          <p>Copyright 2022 InvestX. All Rights Reserved</p>
        </div>
      </div>

    </div>


    
  )
}



export default SignIn;

