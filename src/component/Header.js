import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <section id="home">
      <div className="pin-about">
        <div className="overlay"></div>
        <div className="container main-info">
          <div className="row about-row d-flex justify-content-center">
            <div className="col-6 d-flex justify-content-center">
              <div className="display-1 header text-white text-center">
                Welcome to our Future
                <div className="mt-5">
                  <FontAwesomeIcon className="header-icon" icon={faMapMarkerAlt}></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="text-background">
                <h1 className="header-title">Electric Vehicle Charging Network</h1>
                <p className="lead-header-text">Our aim is to faciliate EV owners with an up to date charging station network, that will provide you with charging stations in your area.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
