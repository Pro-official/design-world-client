import React, { useState } from "react";
import "./Register.css";
import { Alert, Card, Spinner } from "react-bootstrap";
import cover from "../../images/cover.png";
import logo from "../../images/Group.png";
import { NavLink, useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Navigation from "./../Shared/Navigation";
import useAuth from "./../../hooks/useAuth";

const Registration = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, signInWithGoogle, isLoading } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData?.password !== loginData?.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  const handleGoogleLogin = () => {
    signInWithGoogle();
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
        <div className="registration" style={divSytle}>
          <div>
            <div className="row">
              <div className="col col-md-6 col-sm-12 text-center my-5">
                <img className="logo" src={logo} alt="" />
                <p className="text-white">
                  A GLOBAL COMMUNITY FOR ARTISTIC MINDS
                </p>
              </div>
              <div className="col col-6 my-5">
                <Card className="card">
                  {!isLoading && (
                    <form onSubmit={handleLoginSubmit}>
                      <Card.Body>
                        <Card.Title>Register here...</Card.Title>
                        {isLoading && <Spinner animation="grow" />}
                        {user?.email && (
                          <Alert
                            style={{ backgroundColor: "#b22121" }}
                            className="text-white fw-bold"
                            variant="successful"
                          >
                            Login Successful
                          </Alert>
                        )}
                        <Card.Text>
                          Have an account?{" "}
                          <NavLink
                            style={{ textDecoration: "none", color: "#B22121" }}
                            to="/login"
                          >
                            Login here.
                          </NavLink>
                        </Card.Text>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="floatingInput"
                            placeholder="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                          />
                          <label className="ms-4" htmlFor="floatingInput">
                            Your Name
                          </label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            required
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            name="email"
                            onBlur={handleOnBlur}
                          />
                          <label className="ms-4" htmlFor="floatingInput">
                            Email address
                          </label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            required
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            name="password"
                            onBlur={handleOnBlur}
                          />
                          <label className="ms-4" htmlFor="floatingPassword">
                            Password
                          </label>
                        </div>
                        <div className="form-floating">
                          <input
                            type="password"
                            required
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            name="password2"
                            onBlur={handleOnBlur}
                          />
                          <label
                            className="ms-4"
                            htmlFor="floatingPassword password2"
                          >
                            Retype Password
                          </label>
                        </div>
                      </Card.Body>
                      <input
                        className="ms-4 mb-2 register-button"
                        type="submit"
                        value="Register"
                      />
                      <p className="text-center">
                        ------------------ Or ------------------
                      </p>
                    </form>
                  )}
                  <button onClick={handleGoogleLogin} className="g-login">
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
      </div>
    </>
  );
};

export default Registration;
