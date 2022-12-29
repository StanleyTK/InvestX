import React from 'react'

const header = () => {
  return (
    <div className="header-container">
        <div className="logo">INVESTIFY</div>
        <div className="menu">
            <div className="menu-links">
                <a href="/">App</a>
                <a href="/">Demo</a>
                <a href="/">About Us</a>
                <a href="/">Sign Up</a>

            </div>
        </div>
        <div className="wallet-btn">
            <button className="primary">Login In</button>
        </div>

    </div>
  )
}

export default header