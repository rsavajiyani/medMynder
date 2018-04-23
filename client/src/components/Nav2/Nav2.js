import React from "react";
import { Link } from "react-router-dom";
import "./Nav2.css";

const Nav2 = () => (
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
          
          
        </ul>
      </div>
    </nav>
  </div>
  // <div className="navbar-header"><i class="fas fa-medkit" ></i>MedMYnder
);

export default Nav2;
