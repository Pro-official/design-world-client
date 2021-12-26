import React from "react";
import "./Banner.css";
import cover from "../../images/cover.png";
import TypeWriter from "react-typewriter";

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
          <h1 data-aos="fade-up" className="cover-text text-white ">
            DESIGN <br /> WORLD
          </h1>
          <TypeWriter typing={1}>
            <p className="cover-para">A GLOBAL COMMUNITY FOR ARTISTIC MINDS</p>
          </TypeWriter>
        </div>
      </div>
    </>
  );
};

export default Banner;
