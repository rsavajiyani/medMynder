import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <div className="navbar-fixed header">
    <nav>
      <div className="nav-wrapper header">
        <a href="/" data-target="mobile-demo" className="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <Link to="/" className="brand-logo" >Med<strong>MY</strong>nder<a
        >
          {" "}
          <i className="fas fa-pills app-logo" />
        </a></Link>
        <ul className="right hide-on-med-and-down">
          <li />
          
          <li>
            <Link to="/">Log Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  // <div className="navbar-header"><i class="fas fa-medkit" ></i>MedMYnder
);

export default Nav;
