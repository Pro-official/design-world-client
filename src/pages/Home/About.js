import React from "react";
import about from "../../images/about.svg";
import background from "../../images/Background.png";
import "./About.css";
import * as AiOutlineArrowRight from "react-icons/ai";
import { Link } from "react-router-dom";

const articleStyle = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "relative",
  height: "150vh",
  width: "100%",
};

const About = () => {
  return (
    <article id="about" style={articleStyle}>
      <article className="d-flex justify-content-center align-items-center about-container">
        <article className="text-white about-text">
          <h5 className="about-top">Developed for Designers</h5>
          <h2 className="about-h2">
            The world's most powerful and easy to access artistic hub
            <span>!</span>
          </h2>
          <p className="about-para">
            Hi there! We specialize in exhibiting the top designs and arts made
            by renowned artists from all over the world. You can enjoy them, buy
            them, or if you want, you can upload your own!
          </p>
          <Link to="/dashboard/contact">
            <button className="about-button">
              Contact{" "}
              <AiOutlineArrowRight.AiOutlineArrowRight className="fs-5" />
            </button>
          </Link>
        </article>
        <article className="text-white about-image">
          <img src={about} alt="" />
        </article>
      </article>
    </article>
  );
};

export default About;
