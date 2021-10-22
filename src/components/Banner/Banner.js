import React from "react";
import banner2 from "../../images/body.jpg";
import "../Service/Service.css";
import "../Home/Home.css";

const Banner = () => {
  return (
    <div>
      <div className="row banner d-flex align-items-center">
        <div className="col-md-6 align text-center mt-4">
          <h1 className="title">Strong</h1>
          <div className="text-area">
            <h3 className="para banner-para text-center">
              Beat the routine. Train at the caliber of world champipons and get
              in the best shape of your life.
            </h3>
          </div>
        </div>
        <div className="col-md-6 pb-5">
          <img className="img-fluid " src={banner2} alt="" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Banner;
