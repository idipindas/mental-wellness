import React from "react";
import "../styles/aboutStyle.css";
import aboutImage from "../../public/about.jpg";
function About() {
  return (
    <div>
      <div className="about-body d-flex align-items-center">
        <img
          src={aboutImage}
          alt="About Us"
          className="about-image-responsive"
        />
        <div className="about-content">
          <span>About Us</span>
          <div className="underline-about"></div>
          <span className="about-content-text">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
