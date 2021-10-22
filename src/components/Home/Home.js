import React from "react";
import "./Home.css";
import "../Service/Service.css";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Pricing from "./../Pricing/Pricing";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Pricing></Pricing>
      <Products></Products>
    </div>
  );
};

export default Home;
