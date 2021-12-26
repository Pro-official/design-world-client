import React, { useRef } from "react";
import { Alert } from "react-bootstrap";
import useAuth from "./../../../hooks/useAuth";

const division = {
  backgroundColor: "#34353a",
  height: "100vh",
};

const LogButton = {
  backgroundColor: "white",
  color: "#B22121",
  fontWeight: 600,
  border: "1px solid #B22121",
  padding: "0 15px",
  height: "40px",
  borderRadius: "15px",
  marginTop: "10px",
  marginLeft: "50px",
};

const AddDesign = () => {
  const nameRef = useRef();
  const authorRef = useRef();
  const categoryRef = useRef();
  const imgRef = useRef();
  const describeRef = useRef();
  const { user } = useAuth();

  const handleSubmit = (e) => {
    console.log("Hi");
    const name = nameRef.current.value;
    const author = authorRef.current.value;
    const category = categoryRef.current.value;
    const img = imgRef.current.value;
    const description = describeRef.current.value;
    const authorPic = user.photoURL;
    const email = user.email;

    const newPlan = {
      name,
      author,
      category,
      description,
      img,
      authorPic,
      email,
      // visited: 0,
    };

    fetch("http://localhost:5000/designs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlan),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          <Alert
            style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
            variant="success"
          >
            New Design Added!
          </Alert>;
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div style={division}>
      <div style={{ paddingTop: "100px" }}>
        <h2 className="text-center text-white mb-4">Add New Design</h2>
        <form
          style={{
            backgroundColor: "white",
            border: "1px solid white",
            borderRadius: "15px",
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow:
              "(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
          onSubmit={handleSubmit}
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Design Title"
              ref={nameRef}
            />
            <label className="ms-5" for="floatingInput">
              Design Title
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="author"
              value={user.displayName}
              ref={authorRef}
            />
            <label className="ms-5" for="floatingPassword">
              Author
            </label>
          </div>
          <div className="form-floating mb-3">
            <select
              type="text"
              className="form-control"
              placeholder="rating"
              ref={categoryRef}
              required
              style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
              class="form-select"
              aria-label="Default select example"
            >
              <option selected>Typography</option>
              <option value="Illustration">Illustration</option>
              <option value="Vector">Vector</option>
              <option value="Photoshop">Photoshop</option>
              <option value="UI/UX">UI/UX</option>
              <option value="UI/UX">Abstract</option>
              <option value="UI/UX">Architecture</option>
            </select>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="image url"
              ref={imgRef}
            />
            <label className="ms-5" for="floatingPassword">
              Image Link
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="Write design description"
              ref={describeRef}
            />
            <label className="ms-5" for="floatingPassword">
              Description
            </label>
            <button style={LogButton}>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDesign;
