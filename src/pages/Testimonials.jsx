// Testimonials.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import '../styles/testmonialsStyle.css'; // Custom styles
import img1 from '../../public/home-image1.jpg'

const Testimonials = () => {
  const testimonialsData = [
    {
      image: img1,
      quote: 'This is an amazing product!',
      name: 'User 1',
      rating: 5,
    },
    {
      image: img1,
      quote: 'I had a great experience with this service.',
      name: 'User 2',
      rating: 5,
    },
    // Add more testimonials as needed
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <span key={index}>&#9733;</span>
    ));
  };

  return (
    <div className="testimonials mt-3 pt-4">

      <div className="testimonial-head mb-4">
        <span className='col-12 d-flex justify-content-center ' style={{ fontSize:'2rem'}}>Testimonials </span>
        <div className="underline-about"></div>

      </div>
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={5000}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
              <div className="testimonial-rating">{renderStars(testimonial.rating)}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
