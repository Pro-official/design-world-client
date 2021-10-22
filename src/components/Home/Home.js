import React from "react";
import "./Home.css";
import "../Service/Service.css";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Pricing from "./../Pricing/Pricing";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Pricing></Pricing>
    </div>
  );
};

export default Home;
