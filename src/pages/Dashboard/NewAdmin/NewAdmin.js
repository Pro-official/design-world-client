import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const LogButton = {
  backgroundColor: "white",
  color: "#B22121",
  fontWeight: 600,
  border: "1px solid #B22121",
  padding: "0 15px",
  height: "40px",
  borderRadius: "15px",
  marginTop: "10px",
  marginLeft: "20px",
};

const NewAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2 className="text-center my-4">Make admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <div
          className="form-floating mb-3"
          style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
        >
          <input
            onBlur={handleOnBlur}
            label="Email"
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label className="ms-5" for="floatingInput">
            Email address
          </label>
          <span>
            <button style={LogButton} type="submit" variant="contained">
              Make Admin
            </button>
          </span>
        </div>
      </form>
      {success && (
        <Alert
          style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
          variant="success"
        >
          Admin Making Done!
        </Alert>
      )}
    </div>
  );
};

export default NewAdmin;
