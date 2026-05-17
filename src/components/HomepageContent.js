import React from "react";
import "../styles/HomePageContent.css";
import GabbyHomePagePic1 from "../images/Gabby_Homepage_Pic.jpg";
import GabbyHomePagePic2 from "../images/Gabby_Homepage_Pic2.jpg";
import GabbyHomePagePic3 from "../images/Gabby_Homepage_Pic5.jpg";
import GabbyHomePagePic4 from "../images/Gabby_Homepage_Pic4.jpg";

const HomepageContent = () => {
  return (
    <div className="container-Content-Home">
      <img src={GabbyHomePagePic1} alt="" />
      <h1>
        Proudly Serving Connecticut & the Hudson Valley <br /> ~
        <br /> Orgullosamente sirviendo a Connecticut y al Valle de Hudson
      </h1>
      <img src={GabbyHomePagePic2} alt="" />
      <img src={GabbyHomePagePic3} alt="" />
      <div className="offer-text">
        <h1>
          What We Offer <br /> ~ <br /> Lo Que Ofrecemos
        </h1>
        <ul className="offer-items">
          <li className="offer-item">Birthdays || Cumpleaños</li>
          <li className="offer-item">Weddings || Bodas</li>
          <li className="offer-item">Baptisms || Bautismos</li>
          <li className="offer-item">Sweet 16 || Quinceañeras</li>
          <li className="offer-item">Receptions || Recepciones</li>
          <li className="offer-item">Graduations || Graduaciones</li>
          <li className="offer-item">Reunions || Reuniones</li>
          <li className="offer-item">Baby Showers</li>
          <li className="offer-item">...and more!</li>
        </ul>
      </div>
      <img src={GabbyHomePagePic4} alt="" />
    </div>
  );
};

export default HomepageContent;
