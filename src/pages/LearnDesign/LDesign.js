import React from "react";
import * as AiFillStar from "react-icons/ai";

const LDesign = ({ design }) => {
  const { courseName, instructor, price, rating, image } = design;

  return (
    <>
      <div>
        <div className="col design">
          <div className="card ui-card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="description">
              <h6>{instructor}</h6>
              <p>
                {rating}
                <AiFillStar.AiFillStar />
              </p>
            </div>
            <div
              style={{ margin: "0 -10px" }}
              className="card-body d-flex justify-content-between text-align-center"
            >
              <h6 className="card-title">{courseName.slice(0, 20)}</h6>
              <h6>{price} $</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LDesign;
