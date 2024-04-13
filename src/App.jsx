import React from "react";
import "./styles.css";

function App() {
  return (
    <div>
      <div className="header">
        <div className="h-1 bg-blue-800"></div>
        <nav className="navbar">
          <div className="nav-brand">
            <h4 className="font-bold">Kalvium</h4>
          </div>
          <div className="nav-links">
            <h4>About us</h4>
            <h4>Contacts</h4>
            <h4>Courses</h4>
          </div>
          <div>
            <button className="login-btn">Login</button>
          </div>
        </nav>
      </div>
      <div className="container">
        <button className="primary-btn">Button One</button>
        <div className="alert">
          <strong>Alert!</strong>
          <span>This is awesome!</span>
        </div>
        <div className="content">
          <img
            className="logo"
            src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
            alt="kalvium logo"
          />
          <div>
            <h3 className="font-bold">Kalvium store</h3>
            <p>You have a new Course!</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <h4 className="copyright">© 2023 Copyright: Kalvium</h4>
      </div>
    </div>
  );
}

export default App;
