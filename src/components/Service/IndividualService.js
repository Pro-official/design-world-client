import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Service.css";

const IndividualService = () => {
  const { serviceId } = useParams();
  const [details, setDetails] = useState([]);
  const [select, setSelect] = useState({});

  // load service data

  useEffect(() => {
    const individualService = "/servicesDB.json";
    fetch(individualService)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  // find service via id
  useEffect(() => {
    setSelect(details.find((item) => item.id === parseInt(serviceId)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details]);

  console.log(serviceId);

  //Display select service info

  return (
    <div className="service__container">
      <div className="ind_service">
        <div className="service__img text-center">
          <img src={select?.img} alt="" />
        </div>
        <div className="container mt-5 text-white">
          <h1>{select?.name}</h1>
          <p>{select?.description}</p>
          <br />
          <Link to="/home">
            <button className="back">Go to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndividualService;
