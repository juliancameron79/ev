import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChargingStation } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="myScrollspy">
      <div className="navbar-brand">
        <FontAwesomeIcon className="brand-icon" icon={faChargingStation}></FontAwesomeIcon>
        <span className="brand-text ml-3">EVCN</span>
      </div>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              about
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#evcn-map">
              EVCN Map
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact-us">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
