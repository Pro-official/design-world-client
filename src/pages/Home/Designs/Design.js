import React from "react";
import { Link } from "react-router-dom";
import "./Designs.css";
import * as AiFillHeart from "react-icons/ai";

const cardStyle = {
  margin: "10px -35px",
};

const Design = ({ design }) => {
  const { name, img, author, category, _id } = design;
  return (
    <Link
      to={`/designs/${_id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div style={cardStyle} className="col">
        <div className="card ui-card">
          <img src={img} className="card-img-top" alt="..." />
          <div class="description">
            <h6>{author}</h6>
            <p>{category}</p>
          </div>
          <div
            style={{ margin: "0 -12px" }}
            className="card-body d-flex justify-content-between text-align-center"
          >
            <h6 className="card-title">{name.slice(0, 20)}</h6>
            <p>
              <Link to="#">
                <button className="border-0">
                  <AiFillHeart.AiFillHeart
                    style={{
                      color: "red",
                      marginRight: "0",
                      fontsize: "25px",
                    }}
                  />
                </button>
              </Link>
              165
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Design;
