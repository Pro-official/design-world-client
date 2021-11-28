import React, { useState } from "react";
import Navigation from "../Shared/Navigation";
import "./Register.css";
import { Card } from "react-bootstrap";
import "./Register.css";
import cover from "../../images/cover.png";
import logo from "../../images/Group.png";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "./../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    alert("Login Successful");
    e.preventDefault();
    console.log("submit");
  };

  const divSytle = {
    backgroundImage: `url(${cover})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "relative",
    height: "100vh",
    width: "100%",
    overflowX: "hidden",
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="register">
        <div style={divSytle}>
          <div className="row">
            <div className="col col-md-6 col-sm-12 text-center my-5">
              <img className="logo" src={logo} alt="" />
              <p className="text-white">
                A GLOBAL COMMUNITY FOR ARTISTIC MINDS
              </p>
            </div>
            <div className="col col-6 my-5">
              <Card style={{ width: "32rem" }}>
                <form onSubmit={handleLoginSubmit}>
                  <Card.Body>
                    <Card.Title>Login Here...</Card.Title>
                    <Card.Text>
                      Need an account?{" "}
                      <NavLink
                        style={{ textDecoration: "none", color: "#B22121" }}
                        to="/registration"
                      >
                        Register here.
                      </NavLink>
                    </Card.Text>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="email"
                        onChange={handleOnChange}
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        onChange={handleOnChange}
                      />
                      <label for="floatingPassword">Password</label>
                    </div>
                  </Card.Body>
                  <input
                    className="mb-2 register-button"
                    type="submit"
                    value="Login"
                  />
                  <p className="text-center">
                    ------------------ Or ------------------
                  </p>
                </form>
                <button className="g-login">
                  <span className="fs-4">
                    <FcGoogle />
                  </span>{" "}
                  Continue With Google
                </button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
