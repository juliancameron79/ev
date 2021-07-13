import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-12 follow-us-container pt-4">
            <ul className="social-icons">
              <li className="social-icons-list-items">
                <a target="_blank" href="#">
                  <FontAwesomeIcon className="footer-icon" icon={faFacebookF}></FontAwesomeIcon>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li className="social-icons-list-items">
                <a target="_blank" href="#">
                  <FontAwesomeIcon className="footer-icon" icon={faTwitter}></FontAwesomeIcon>
                  <span className="sr-only">Twitter</span>
                </a>
              </li>
              <li className="social-icons-list-items">
                <a target="_blank" href="#">
                  <FontAwesomeIcon className="footer-icon" icon={faInstagram}></FontAwesomeIcon>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 my-2">
            <p className="copyright">
              &copy; Tagged Media
              <script type="text/JavaScript">document.write(new Date().getFullYear());</script>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
