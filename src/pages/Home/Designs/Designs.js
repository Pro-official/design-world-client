import React, { useEffect } from "react";
import Design from "./Design";
import "./Designs.css";

const designsStyle = {
  marginLeft: "50px",
  marginRight: "-2em",
};

const Designs = () => {
  const [designs, setDesigns] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/designs")
      .then((res) => res.json())
      .then((json) => setDesigns(json));
  }, []);

  return (
    <div>
      <hr />
      <div
        style={designsStyle}
        className="row row-cols-1 ros-cols-sm-1 row-cols-md-3 row-cols-lg-4"
      >
        {designs.map((design) => (
          <Design key={design._id} design={design}></Design>
        ))}
      </div>
    </div>
  );
};

export default Designs;
