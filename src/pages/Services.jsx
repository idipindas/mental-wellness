import React from "react";
import "../styles/serviceStyle.css";
import cardimage from "../../public/home-image1.jpg";
import Testimonials from "./Testimonials";

function Services() {
  return (
    <div>
      <div className="">
        {/* <div className="d-flex justify-content-center">
          <div className=" service-head">Services</div>
        </div> */}

        
      </div>

      <div className=" mb-4">
        <span className='col-12 d-flex justify-content-center ' style={{ fontSize:'2rem'}}>Services </span>
        <div className="underline-about"></div>
        </div>
      <div className="service-container">
        <div className="service-card">
          <img src={cardimage} alt="Service 1" />
          <div className="card-content">
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src={cardimage} alt="Service 2" />
          <div className="card-content">
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src={cardimage} alt="Service 3" />
          <div className="card-content">
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <Testimonials/>
    </div>
  );
}

export default Services;
