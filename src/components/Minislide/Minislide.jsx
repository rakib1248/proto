import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slidermini } from "../../Data/Data";

const LogoSlider = () => {
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Loop the logos
    speed: 500, // Speed of transition
    slidesToShow: 5, // Number of logos visible at a time
    slidesToScroll: 1, // Scroll one logo at a time
    autoplay: true, // Autoplay the slider
    autoplaySpeed: 2000, // Speed between transitions
   
  };

  return (
    <div className="logo-slider">
      <Slider {...settings}>
        {slidermini.map((logo) => (
          <div key={logo}>
            <img
              src={logo.image}
              alt={logo.alt}
              style={{ width: "200px", opacity: 0.7 }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
