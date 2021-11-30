import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";
import logo from "../../images/donut8.png";
import sprinkles from "../../images/logos.png";

const Nav = () => {
  const history = useHistory();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navSlide = () => {
    setNavbarOpen(!navbarOpen);
  };
  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push("/login");
  };
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("token")
  );

  return (
    <div className="divnav">
      <nav>
        <div className={`nav-items ${navbarOpen ? " nav-active" : ""}`}>
          <Link className="logo" to="/">
            <img src={logo} alt="logo" className="img-logo" />
          </Link>
          {isLoggedIn && (
            <Link className="button" to="/">
              Home
            </Link>
          )}
          <Link className="button" to="/about">
            About
          </Link>
          {!isLoggedIn && (
            <Link className="button" to="/login">
              Login
            </Link>
          )}
          {isLoggedIn && (
            <Link onClick={logout} className="button" to="/login">
              Logout
            </Link>
          )}

          {!isLoggedIn && (
            <Link className="button" to="/register">
              Register
            </Link>
          )}
        </div>
        <div className="responsive-nav">
          <div className={`burger`} onClick={navSlide}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          {isLoggedIn && <div className="username--nav_resp">Hi, {username}</div>}
        </div>
      </nav>
      {isLoggedIn && <div className="username--nav">Hi, {username}</div>}
      <div id="center">
        <img className="center" id="sprinkles-logo" src={sprinkles} alt="logo" />
      </div>
    </div>
  );
};

export default Nav;

const username = window.localStorage.getItem("username");
