import React from "react";

const Header = () => {
  return (
    <section id="home">
      <div className="pin-about">
        <div className="overlay"></div>
        <div className="container main-info">
          <div className="row about-row d-flex justify-content-center">
            <div className="col-6 d-flex justify-content-center">
              <div className="display-1 header-title text-white text-center">Welcome to our Future</div>
            </div>
            <div className="col-md-7">
              <div className="text-background">
                <div className="about-text">
                  <h1 className="header-title">Electric Vehicle Charging Network</h1>
                  <p className="lead-header-text">Our aim is to faciliate EV owners with an up to date charging station network, that will provide you with charging stations in your area.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
