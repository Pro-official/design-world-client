import React, { useEffect } from "react";
import { useParams } from "react-router";
import Navigation from "../../Shared/Navigation";
import * as AiFillHeart from "react-icons/ai";
import * as BsSaveFill from "react-icons/bs";
import useAuth from "./../../../hooks/useAuth";
import { Alert } from "react-bootstrap";

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
  const [design, setDesign] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  const [loveSuccess, setLoveSuccess] = React.useState(false);
  // const [loved, setLoved] = React.useState({});
  const [saved, setSaved] = React.useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/saved/desired?designPhoto=${design.img}`)
      .then((res) => res.json())
      .then((data) => setSaved(data));
  }, [success, design.img]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:5000/designs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setDesign(data);
          setLoveSuccess(true);
        });
    };
    fetchData();
  }, [id, success]);
  const { name, category, author, img, description } = design;

  if (loveSuccess) {
    var newObject = Object.keys(design.lover).length;
  } else {
    // console.log("Didn't work");
  }

  const initialInfo = {
    userName: user?.displayName,
    email: user?.email,
    photo: user?.photoURL,
  };

  const handleLove = () => {
    const info = { email: user?.email };
    fetch(`http://localhost:5000/designs/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // setLoveSuccess(true);
        }
      });
  };

  const handleSave = () => {
    const saved = {
      ...initialInfo,
      designId: id,
      designName: design?.name,
      designPhoto: design?.img,
      designAuthor: design?.author,
      designCategory: design?.category,
    };
    fetch("http://localhost:5000/saved", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saved),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
        }
      });
  };

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
              <h5 className="text-start indi-name">{name}</h5>
              <p className="text-start">Category: {category}</p>
              <h6 className=" fw-bold indi-author">Author: {author}</h6>
            </div>
          </div>
          <div className="text-center indi-image">
            <img className="my-4" src={img} alt="" />
          </div>
          <p className="">
            <AiFillHeart.AiFillHeart
              style={{ color: "red" }}
              className="me-1 fw-bold fs-4"
            />
            {setLoveSuccess && <span className="save-count">{newObject}</span>}
            Loves &nbsp; || &nbsp;{" "}
            <BsSaveFill.BsSaveFill
              style={{ color: "black" }}
              className="fw-bold fs-4"
            />
            <span className="save-count">{saved.length}</span>
            Saves
          </p>

          <div className="text-start indi-description">
            {success ? (
              <button disabled className="save-button ms-3 ">
                <BsSaveFill.BsSaveFill className="me-2 fw-bold fs-4" />
                Saved!
              </button>
            ) : (
              <>
                <button onClick={handleSave} className="save-button">
                  <BsSaveFill.BsSaveFill className="me-2 fw-bold fs-4" />
                  Save Design
                </button>
              </>
            )}
            {success && <Alert variant="success">Design Saved!</Alert>}
            <button onClick={handleLove} className="like-button ms-3">
              <AiFillHeart.AiFillHeart className="me-2 fw-bold fs-4" />
              Love This
            </button>
            <h5>{description}</h5>
          </div>
        </div>
      </>
    </>
  );
};

export default IndividualDesign;
