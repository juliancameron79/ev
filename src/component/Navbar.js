import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChargingStation } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
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
            <Link activeClass="active" className="nav-link" to="home" spy={true} smooth={true} href="#home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" className="nav-link" to="about" spy={true} smooth={true} href="#about">
              about
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" className="nav-link" to="map" spy={true} smooth={true} href="#map">
              EVCN Map
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" className="nav-link" to="contact-us" spy={true} smooth={true} href="#contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
