import React from "react";
import Navigation from "./../Shared/Navigation";
import "./LearnDesign.css";

const LearnDesign = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="text-center learn-design">
        <div className="intro">
          <h1>
            Learn everything <br /> alongside industry leaders
          </h1>
          <p>
            Looking to level up your design skills? More than a simple webinar
            or static online course, Dribbble Workshops are live and highly
            interactive—featuring must-have insights from your favorite design
            leaders.
          </p>
        </div>
        <div className="row row-cols-1 ros-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-0">
          <div className="col">
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnDesign;
