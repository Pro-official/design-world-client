import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Designs.css";
import * as AiFillHeart from "react-icons/ai";
import * as AiFillEye from "react-icons/ai";

const Design = ({ design }) => {
  const { name, img, author, category, _id, lover } = design;
  const [viewes, setViewes] = React.useState({});
  const [success, setSuccess] = React.useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/viewed")
      .then((res) => res.json())
      .then((data) => {
        setViewes(data);
        setSuccess(true);
      });
  }, []);
  if (success) {
    var newViewes = viewes
      .filter((view) => view.img[0] === img)
      .map((newView) => newView.count);
  } else {
    // console.log("nothing to do");
  }

  const handleCount = () => {
    const image = [img];
    fetch("http://localhost:5000/viewed", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(image),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // setCount("");
          // setSuccess(true);
        }
      });
  };
  return (
    <>
      <div>
        <div className="col design">
          <div className="card ui-card">
            <Link
              onClick={handleCount}
              to={`/designs/${_id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src={img} className="card-img-top" alt="..." />
              <div className="description">
                <h6>{author}</h6>
                <p className="mt-2">{category}</p>
              </div>
            </Link>
            <div
              style={{ margin: "0 -10px" }}
              className="card-body d-flex justify-content-between text-align-center"
            >
              <h6 className="card-title">{name.slice(0, 20)}</h6>
              {/* {success && <p>Done!</p>} */}
              <div className="d-flex">
                <p className="me-2">
                  <AiFillHeart.AiFillHeart className="love-icon" />
                  {lover.length}
                </p>
                {success && (
                  <p className="me-2">
                    <AiFillEye.AiFillEye className="view-icon" />
                    {newViewes}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
