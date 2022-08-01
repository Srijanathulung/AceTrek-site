import React from "react";
import Logo from "../../assets/ace-logo.svg";
import "./Header.css";
import Slogan from "../../assets/slogan.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
  return (
    <div className="Container">
    <div className="  top-header">
      <div className="row">
        <div className="col-6">
          <img src={Logo} alt="logo " />

          <img src={Slogan} alt="slogan" className="slogan" />
        </div>

        <div className="col-6  ">
          <div className=" d-flex justify-content-end">
            <div className="location p-2">Change Location</div>
            <div className=" location p-2">
              <Dropdown />
            </div>
          </div>
          <div className="d-flex justify-content-end p-1">
            <div className="link ">
              <FontAwesomeIcon icon={faWhatsapp} color="green" />
              {/* <img src={Whatsapp} alt="whats app image" className="whatsapp" /> */}
              <FontAwesomeIcon icon={faPhone} color="white" />
              <a href="tel:8665562570">Call us at 866-556-2570</a>

              <div className="span d-flex justify-content-end">
                we are open 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
