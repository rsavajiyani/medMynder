import React from "react";
import "./Footer.css";

const Footer = ({ children }) => (
  <div>
    <footer className="page-footer" id="footer">
      <div className="container">
        <div className="row">
          <div class="col l6 s12">
            <h5 class="white-text">Contact Us</h5>
            <p class="grey-text text-lighten-4">
              {" "}
              Samantha Bell:{" "}
              <a href="https://github.com/sbell093">
                https://github.com/sbell093
              </a>{" "}
              <br /> Ravi Savajiyani:{" "}
              <a href="https://github.com/rsavajiyani">
                https://github.com/rsavajiyani
              </a>{" "}
              <br /> Andreya Valabek:{" "}
              <a href="https://github.com/avalabek">
                https://github.com/avalabek
              </a>{" "}
              <br /> Miriam Khaled:{" "}
              <a href="https://github.com/mkhaled82">
                https://github.com/mkhaled82
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
