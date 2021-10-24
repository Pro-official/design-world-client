import React from "react";
import { useHistory, useLocation } from "react-router";
import { Button, Form, Row } from "react-bootstrap";
import "./Registration.css";
import useAuth from "./../../hooks/useAuth";

const Registration = () => {
  const {
    handleSubmit,
    isLogin,
    setIsLoading,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    checkedIsLogin,
    signInUsingGoogle,
    error,
    setUser,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  // handle redirecting using google login
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(location.state?.from || "/home");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="d-flex justify-content-center p-5 text-white bg-black">
      <Form onSubmit={handleSubmit} className="registration">
        <h5 className="text-center">Please {isLogin ? "Login" : "Register"}</h5>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            onChange={checkedIsLogin}
            type="checkbox"
            label="Already Registared?"
          />
        </Form.Group>
        {!isLogin && (
          <Form.Group controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleNameChange}
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>
        )}
        <Row className="mb-3">
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
            />{" "}
          </Form.Group>
          <p>{error}</p>
        </Row>
        <Button className="me-2 log-button" type="submit">
          {isLogin ? "Login" : "Register"}
        </Button>
        <Button onClick={handleGoogleSignIn} className="log-button">
          Google Sign In
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
