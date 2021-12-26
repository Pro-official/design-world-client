import React from "react";
import "./FindWork.css";
import Navigation from "../Shared/Navigation";
import findwork from "../../images/findwork.jpg";
import { Link } from "react-router-dom";

const findStyle = {
  backgroundImage: `url(${findwork})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "relative",
  height: "100vh",
  width: "100%",
};

const FindWork = () => {
  return (
    <>
      <Navigation></Navigation>
      <div style={findStyle} className="find text-center">
        <div className="find-button">
          <Link to="/dashboard/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FindWork;
