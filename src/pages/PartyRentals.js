import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/PartyRentals.css";

//importing Pictures
import PartyRentalsPic1 from "../images/PartyRentalsItems/PartyRentalsItemPic1.jpg";
import PartyRentalsPic2 from "../images/PartyRentalsItems/PartyRentalsItemPic2.jpg";
import PartyRentalsPic3 from "../images/PartyRentalsItems/PartyRentalsItemPic3.jpg";
import PartyRentalsPic4 from "../images/PartyRentalsItems/PartyRentalsItemPic4.jpg";
import PartyRentalsPic5 from "../images/PartyRentalsItems/PartyRentalsItemPic5.jpg";
import PartyRentalsPic6 from "../images/PartyRentalsItems/PartyRentalsItemPic6.jpg";
import PartyRentalsPic7 from "../images/PartyRentalsItems/PartyRentalsItemPic7.jpg";
import PartyRentalsPic8 from "../images/PartyRentalsItems/PartyRentalsItemPic8.jpg";
import PartyRentalsPic9 from "../images/PartyRentalsItems/PartyRentalsItemPic9.jpg";
import PartyRentalsPic10 from "../images/PartyRentalsItems/PartyRentalsItemPic10.jpg";
import PartyRentalsPic11 from "../images/PartyRentalsItems/PartyRentalsItemPic11.jpg";
import PartyRentalsPic12 from "../images/PartyRentalsItems/PartyRentalsItemPic12.jpg";
import PartyRentalsPic13 from "../images/PartyRentalsItems/PartyRentalsItemPic13.jpg";
import PartyRentalsPic14 from "../images/PartyRentalsItems/PartyRentalsItemPic14.jpg";
import PartyRentalsPic15 from "../images/PartyRentalsItems/PartyRentalsItemPic15.jpg";
import PartyRentalsPic16 from "../images/PartyRentalsItems/PartyRentalsItemPic16.jpg";
import PartyRentalsPic17 from "../images/PartyRentalsItems/PartyRentalsItemPic17.jpg";
import PartyRentalsPic18 from "../images/PartyRentalsItems/PartyRentalsItemPic18.jpg";

const PartyRentals = () => {
  return (
    <>
      <Navbar />
      <div className="item-card-container">
        <h2
          style={{
            marginTop: "10px",
            textAlign: "center",
            fontFamily: "Rakkas",
            color: "purple",
          }}
        >
          Items available for rent:{" "}
        </h2>
        <ul className="list-items-card">
          <div className="list-items">
            <img src={PartyRentalsPic1} alt="" />
            <li className="list-item">Chairs (with covers)</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic2} alt="" />
            <li className="list-item">Table Linens & Runners</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic3} alt="" />
            <li className="list-item">Glassware/Utensils</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic4} alt="" />
            <li className="list-item">Pitchers</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic5} alt="" />
            <li className="list-item">Buffet Containers</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic6} alt="" />
            <li className="list-item">Chafing Dishes</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic7} alt="" />
            <li className="list-item">Center Pieces</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic8} alt="" />
            <li className="list-item">Decorative Items</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic9} alt="" />
            <li className="list-item">Personalized Desserts</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic10} alt="" />
            <li className="list-item">Cake Stands</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic11} alt="" />
            <li className="list-item">Invitations</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic12} alt="" />
            <li className="list-item">Candle Lights</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic13} alt="" />
            <li className="list-item">Back Drops</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic14} alt="" />
            <li className="list-item">Party Favors</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic15} alt="" />
            <li className="list-item">Rounded Tables</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic16} alt="" />
            <li className="list-item">Outdoor Tents</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic17} alt="" />
            <li className="list-item">Bar/ Bar Accessories</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic18} alt="" />
            <li className="list-item">Rectangular Tables</li>
          </div>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default PartyRentals;
