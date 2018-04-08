import React from "react";
import "./Nav.css";

const Nav = () => (
  <div className="navbar-fixed header">
    <nav>
      <div className="nav-wrapper header">
         <a href="/" className="brand-logo center" />
        Med<strong>MY</strong>nder<a>
          {" "}
          <i className="fas fa-pills app-logo" />
        </a>
        <ul className="right hide-on-med-and-down">
          <li />
          <li>
            <a href="/profile">Putting you back in control of your own health.</a>
          </li>
        
          <li>
            <a href="/">Login</a>
          </li>
          
          <li>
            <a href="/signup">REGISTER</a>
          </li>
         
        </ul>
      </div>
    </nav>
  </div>
  // <div className="navbar-header"><i class="fas fa-medkit" ></i>MedMYnder
);

export default Nav;
