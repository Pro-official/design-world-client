import React, { useEffect } from "react";
// import "./Designs.css";
import { GridLoader } from "react-spinners";
import LDesign from "./LDesign";
import Navigation from "../Shared/Navigation";

const LearnDesign = () => {
  const [designs, setDesigns] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    fetch("https://radiant-journey-70403.herokuapp.com/courses")
      .then((res) => res.json())
      .then((json) => {
        setDesigns(json);
        setLoading(true);
      });
  }, []);

  return (
    <div id="designs">
      <Navigation></Navigation>
      <hr style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }} />
      <div
        data-aos="fade-down"
        className="row design-style row-cols-1 ros-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-0"
      >
        {loading ? (
          designs
            .map((design) => (
              <>
                <LDesign key={design._id} design={design}></LDesign>
              </>
            ))
            .reverse()
        ) : (
          <div className="api-loader">
            <GridLoader loading size={24} color="#B22121" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnDesign;
