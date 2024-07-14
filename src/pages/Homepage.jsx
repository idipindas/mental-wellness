import React from "react";
import image1 from "../../public/home-image1.jpg";
import "../styles/homepage.css";
import Layout from "../components/Layout";

function Homepage() {
  return (
    <div>
      <div className="image-container">
        <img src={image1} alt="" className=" image-responsive" />
        <div className="overlay-text">
          <span>Mental Wellness Haven</span>
          <div className="underline mt-2"></div>

          <div className="s2-h mt-3"> A Caring Environment for Mental Health Recovery</div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
