import React from "react";
import "./landingPage.css";
import logo from "../images/logo.svg";
import illustration from "../images/illustration-working.svg";
const landingPage = () => {
  return (
    <div className="landingPage">
      <div className="nav">
        <nav className="navbar">
          <img src={logo} alt="" className="logo" />
          <ul className="nav-bar-list">
            <li className="listItem">
              <a className="link" href="#">
                Features
              </a>
            </li>
            <li className="listItem">
              <a className="link" href="#">
                Pricing
              </a>
            </li>
            <li className="listItem">
              <a className="link" href="#">
                Ressources
              </a>
            </li>
          </ul>
          <div className="navBtn">
            <button className="btn login">
              <a href="#" className="loginLink">
                Log in
              </a>
            </button>
            <button className="btn signup">
              <a href="#" className="signupLink">
                Sign up
              </a>
            </button>
          </div>
        </nav>
      </div>
      <div className="main_landingPage">
        <div className="maintext">
          <h1>More than just shorter links</h1>
          <p className="paratext">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btnGet">Get started</button>
        </div>
        <img src={illustration} className="illustration" alt="" />
      </div>
    </div>
  );
};

export default landingPage;
