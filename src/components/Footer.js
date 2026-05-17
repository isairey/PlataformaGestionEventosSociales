import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="https://www.instagram.com/gabbys_party_rentals/">
        <BsInstagram className="Ig-logo" />
      </a>
      <a href="https://www.facebook.com/gabbyspartyrentals/">
        <AiOutlineFacebook className="Fb-logo" />
      </a>
    </div>
  );
};

export default Footer;
