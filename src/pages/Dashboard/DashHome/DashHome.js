import React from "react";
import "../../Home/Banner.css";
import cover from "../../../images/cover.png";

const divSytle = {
  backgroundImage: `url(${cover})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "relative",
  height: "100vh",
  width: "100%",
  marginTop: "20px",
};

const DashHome = () => {
  return (
    <>
      <div>
        <div className="text-center" style={divSytle}>
          <h1 className="cover-text text-white">DASHBOARD</h1>
          <p className="cover-para">Click the menu to explore.</p>
        </div>
      </div>
    </>
  );
};

export default DashHome;
