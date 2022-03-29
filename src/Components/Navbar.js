import React from "react";
import "../Css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <Link className="nav-link" to="/">
              <span>P</span>lag
              <span>C</span>heck
            </Link>
          </h2>
        </div>

        <div className="btn d-flex">
          <Link className="nav-link" to="/login">
            <li>Login</li>
          </Link>
          <Link className="nav-link" to="/register">
            <li>Register</li>
          </Link>
          <Link className="nav-link" to="/support" >
            <li>Support</li>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
