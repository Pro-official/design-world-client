import React, { useEffect } from "react";
import { useParams } from "react-router";
import Navigation from "../../Shared/Navigation";

const photoStyle = {
  width: "100px",
  clipPath: "circle()",
};

const individualStyle = {
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
};

const IndividualDesign = () => {
  const { id } = useParams();
  const [design, setDesign] = React.useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/designs/${id}`)
      .then((res) => res.json())
      .then((data) => setDesign(data));
  }, [id]);
  return (
    <>
      <Navigation></Navigation>
      <>
        <div style={individualStyle} className="text-center mt-5">
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="me-3"
              style={photoStyle}
              src={design.authorPic}
              alt=""
            />
            <div>
              <h5 className="text-start indi-name">{design.name}</h5>
              <p className="text-start">Category: {design.category}</p>
              <h6 className=" fw-bold indi-author">Author: {design.author}</h6>
            </div>
          </div>
          <div className="text-center indi-image">
            <img className="my-4" src={design.img} alt="" />
          </div>
          <div className="text-center indi-description">
            <h5>{design.description}</h5>
          </div>
        </div>
      </>
    </>
  );
};

export default IndividualDesign;
