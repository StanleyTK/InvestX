import React, { useTransition } from 'react'
import { Card } from './Card';

const About = () => {

  const features = [
    {
      // src: ,
      title: "Stanley",
      description:
        "instert image + info here",
    },
    {
      // src: ,
      title: "Savit",
      description:
        "insert image + info here",
    },
    {
      // src: ,
      title: "Fox",
      description:
      "insert image + info here",
    },
    {
      // src: ,
      title: "Sydney Graver (example, add more later)",
      description:
      "Hi! My name is Sydney, and I am a first year student at Penn State who is studying computer science. I learned about this project through Stanley and Fox, who I worked with in the past during a high school internship.",
    },
    {
      // src: ,
      title: "Andy",
      description:
      "insert image + info here",
    },
    {
      // src: ,
      title: "Afeef",
      description:
      "insert image + info here",
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
          <div className="title-info-text2">
            <h1>
            <span className="highlighted">About Us</span>
            </h1>
            <p className="title-info-description">
              We're a team of six college students who are interested in Software Engineering and Computer Science. (add more here)
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



export default About;

