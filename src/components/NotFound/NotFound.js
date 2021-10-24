import React from "react";
import "./NotFound.css";
import image from "../../images/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound text-center">
      <img src={image} alt="" />
      <Link to="/home">
        <button className="m-4 button">Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
