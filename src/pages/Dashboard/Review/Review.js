import React, { useRef } from "react";
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

const Review = () => {
  const { user } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const ratingRef = useRef();
  const describeRef = useRef();

  const handleSubmit = (e) => {
    // console.log("Hi");
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const rating = ratingRef.current.value;
    const review = describeRef.current.value;

    const newPlan = { name, email, rating, review };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlan),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Plan Added Successfully");
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div style={division}>
      <div style={{ paddingTop: "100px" }}>
        <h2 className="text-center text-white mb-4">Add Review for us</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "white",
            border: "1px solid white",
            borderRadius: "15px",
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow:
              "(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
          }}
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Design Title"
              ref={nameRef}
              value={user.displayName}
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
              ref={emailRef}
              value={user.email}
            />
            <label className="ms-5" for="floatingPassword">
              Author
            </label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a review here"
              id="floatingTextarea"
              type="text"
              ref={describeRef}
            ></textarea>
            <label className="ms-5" for="floatingTextarea">
              Write Review
            </label>
          </div>
          <div className="form-floating mb-3">
            <select
              type="text"
              className="form-control"
              placeholder="rating"
              ref={ratingRef}
              required
              style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
              class="form-select"
              aria-label="Default select example"
            >
              <option selected>5</option>
              <option value="1">4</option>
              <option value="2">3</option>
              <option value="3">2</option>
              <option value="3">1</option>
            </select>
            <button style={LogButton}>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
