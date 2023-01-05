import React, { useTransition } from 'react'

const About = () => {



  

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
          <div className="title-info-text2">
            <h1>
            <span className="highlighted">About Us</span>
            </h1>
            <p className="title-info-description">
              We're college students who are interested in Software Engineering
            </p>
            <div className="search-container">
          
            </div>
            
          </div>
      
      </div>
      
    

      <div className="footer-container">
        <div className="footer-copyright">
          <p>Copyright 2022 InvestX. All Rights Reserved</p>
        </div>
      </div>

    </div>


    
  )
}



export default About;

