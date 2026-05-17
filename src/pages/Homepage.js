import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomepageContent from "../components/HomepageContent";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomepageContent />
      <Footer />
    </div>
  );
};

export default Homepage;
