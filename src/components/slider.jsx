import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  1024: { items: 2 }
};

export const Slider = () => {
  return (
    <div id="testimonial" className="sliderarea">
      <h3>お客様の声</h3>
      <p>たくさんの方々に反響を頂いております。</p>

      <div className="slider">
        <AliceCarousel responsive={responsive} mouseTrackingEnabled>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </AliceCarousel>
      </div>

      <button>今すぐ無料相談！</button>
    </div>
  );
};
