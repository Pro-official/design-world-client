import React from "react";
import "./Banner.css";
import cover from "../../images/cover.png";

const divSytle = {
  backgroundImage: `url(${cover})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "relative",
  height: "100vh",
  width: "100%",
  marginTop: "20px",
};

const Banner = () => {
  return (
    <>
      <div>
        <div className="text-center" style={divSytle}>
          <h1 className="cover-text text-white">
            DESIGN <br /> WORLD
          </h1>
          <p className="cover-para">A GLOBAL COMMUNITY FOR ARTISTIC MINDS</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
