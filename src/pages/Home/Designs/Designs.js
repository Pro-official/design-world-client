import React, { useEffect } from "react";
import Design from "./Design";
import "./Designs.css";
import { GridLoader } from "react-spinners";

const Designs = () => {
  const [designs, setDesigns] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/designs")
      .then((res) => res.json())
      .then((json) => {
        setDesigns(json);
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <hr />
      <div className="row design-style row-cols-1 ros-cols-sm-1 row-cols-md-2 row-cols-lg-4 gx-1 gx-md-0 gx-lg-0">
        {loading ? (
          designs.map((design) => (
            <Design key={design._id} design={design}></Design>
          ))
        ) : (
          <div className="api-loader">
            <GridLoader loading size={24} color="#B22121" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Designs;
