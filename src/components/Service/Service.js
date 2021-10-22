import React from "react";
import { Link } from "react-router-dom";
import "./Service.css"

const Service = (props) => {
  const { img, name, description } = props.service;
  return (
    <div className="col-md-4 g-5 serv">
      <img className="service-img img-fluid" src={img} alt="" />
      <h5 className="fw-bolder text-white">{name}</h5>
      <h6 className="description text-white">{description}</h6>
      <Link to="/service/"><button>Details</button></Link>
    </div>
  );
};

export default Service;
