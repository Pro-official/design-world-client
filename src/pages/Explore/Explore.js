import React, { useEffect } from "react";
// import Design from "./Design";
// import "./Designs.css";
import { GridLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import Design from "../Home/Designs/Design";
import Navigation from "../Shared/Navigation";

const Explore = () => {
  const [designs, setDesigns] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    fetch("https://radiant-journey-70403.herokuapp.com/designs")
      .then((res) => res.json())
      .then((json) => {
        setDesigns(json);
        setLoading(true);
      });
  }, []);

  const FilterAllDesign = () => {
    fetch(`https://radiant-journey-70403.herokuapp.com/designs`)
      .then((res) => res.json())
      .then((json) => {
        setDesigns(json);
        setLoading(true);
      });
  };

  const FilterDesign = (item) => {
    const condition = designs.map((newDesign) => newDesign.category === item);
    if (condition) {
      fetch(
        `https://radiant-journey-70403.herokuapp.com/designs/filter/?category=${item}`
      )
        .then((res) => res.json())
        .then((json) => {
          setDesigns(json);
          setLoading(true);
        });
    } else {
      console.log("No designs found");
    }
  };

  return (
    <>
      <Navigation />
      <div id="designs">
        <div className="text-center mb-5 mt-5 design-nav">
          <NavLink
            onClick={() => FilterAllDesign(designs)}
            activeClassName="selected-all"
            to="#"
            className="me-3 filter-button "
          >
            All
          </NavLink>
          <NavLink
            onClick={() => FilterDesign("Typography")}
            activeClassName="selected-typography"
            to="#"
            className="me-3 filter-button"
          >
            Typography
          </NavLink>
          <NavLink
            onClick={() => FilterDesign("Photoshop")}
            to="#"
            className="me-3 filter-button"
          >
            Photoshop
          </NavLink>
          <NavLink
            onClick={() => FilterDesign("Vector")}
            to="#"
            className="me-3 filter-button"
          >
            Vector
          </NavLink>
          <NavLink
            onClick={() => FilterDesign("Illustration")}
            to="#"
            className="me-3 filter-button"
          >
            Illustration
          </NavLink>
          <NavLink
            onClick={() => FilterDesign("UI/UX")}
            to="#"
            className="me-3 filter-button"
          >
            UI/UX
          </NavLink>
          <NavLink
            onClick={() => FilterDesign("Abstract")}
            to="#"
            className="me-3 filter-button"
          >
            Abstract
          </NavLink>
          <NavLink
            onClick={() => FilterDesign("Architecture")}
            to="#"
            className="me-3 filter-button"
          >
            Architecture
          </NavLink>
        </div>
        <div className="row design-style row-cols-1 ros-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-0">
          {loading ? (
            designs
              .map((design) => (
                <>
                  <Design key={design._id} design={design}></Design>
                </>
              ))
              .reverse()
          ) : (
            <div className="api-loader">
              <GridLoader loading size={24} color="#B22121" />
            </div>
          )}
        </div>
        <hr style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }} />
      </div>
    </>
  );
};

export default Explore;
