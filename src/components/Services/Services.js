import React, { useEffect, useState } from "react";
import Service from "./../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const services = "servicesDB.json";
    fetch(services)
      .then((res) => res.json())
      .then((data) => setServices(data));
    console.log(services);
  }, []);
  return (
    <div>
      <div className="second-section">
        <div className="inner-service">
          <div className="service">
            <div>
              <h1 className="title">Push your limits forward</h1>
              <h3 className="para text-center text-white">
                Train with the best experts in bodybuilding field. Your results
                will speak to themselves. Try the latest exercising trend,
                innovative equipement and special nutiotion plans.
              </h3>
            </div>
          </div>
          <div className="services row text-center">
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Services;
