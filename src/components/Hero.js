import React from "react";
import "../styles/Hero.css";
import GabbysBannerPic from "../images/Gabby's Homepage Pic6.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="bannerPic">
        <img src={GabbysBannerPic} alt="" />
      </div>
      <div className="hero-text">
        <h1 style={{ color: "purple" }}>
          {" "}
          Life is a party, let me help you make it unforgettable!
        </h1>
        <button className="btn-book-now">Book Now</button>
      </div>
    </div>
  );
};

export default Hero;
