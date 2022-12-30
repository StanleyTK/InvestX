import React, { useTransition } from 'react'
import { Card } from './Card';

const Intro = () => {

  const features = [
    {
      // src: ,
      title: "Chatbot",
      description:
        "Yea our chatbot is pretty cool",
    },
    {
      // src: ,
      title: "Data Visualization",
      description:
        "some graphs and forecasting stuff",
    },
    {
      // src: ,
      title: "News",
      description: "Follow the most recent stuff for your stocks",
    },
    {
      // src: ,
      title: "Blah blah",
      description:
        "Another feature maybe",
    },
  ];

  

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
          <div className="title-info-text">
            <h1>
              The <span className="highlighted">Financial</span> Tool to Succeed
            </h1>
            <p className="title-info-description">
              Free to use financial to use to keep you track with investments!
            </p>
            <div className="search-container">
          
            </div>
            
          </div>
      
      </div>


      <div className='features-list-container'>
        {
          features.map((feature, index) => {
            return (
              <Card key={index} title={feature.title} imgUrl={feature.src}>{<p>{feature.description}</p>}</Card>
            )
          })
        }
      </div>


      <div className="footer-container">
        <div className="footer-copyright">
          <p>Copyright 2022 InvestX. All Rights Reserved</p>
        </div>
      </div>

    </div>


    
  )
}
export default Intro;

