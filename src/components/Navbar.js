import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import GabbysPic from "../images/Gabby-sLogo.jpg";

const Navbar = () => {
  return (
    <div className="container-nav">
      <nav className="navbar">
        <div className="logo">
          <div className="hero-img">
            <img
              style={{ height: "120px", paddingLeft: "150px" }}
              className="Homepagepic"
              src={GabbysPic}
              alt=""
            />
          </div>
        </div>
        <ul className="nav-links">
          <Link to="/" className="link">
            <li className="nav-link">Home</li>
          </Link>
          {/* <Link to="/rentals" className="link">
            {" "}
            <li className="nav-link">Rentals</li>
          </Link> */}
          <Dropdown>
            <Dropdown.Toggle
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "20px",
                position: "relative",
                bottom: "8px",
                left: "15px",
                color: "plum ",
                fontFamily: "Alfa Slab One",
              }}
              variant="success"
              id="dropdown-basic"
            >
              Rentals
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/partyRentals">Party Rentals</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Party</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Catering Services</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/gallery" className="link">
            <li className="nav-link">Gallery</li>
          </Link>
          <Link to="/info" className="link">
            <li className="nav-link">Info</li>
          </Link>

          <Link to="/contact" className="link">
            <li className="nav-link">Contact Us</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
