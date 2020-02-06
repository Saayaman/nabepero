import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export const Slider = () => {
  const handleOnDragStart = e => e.preventDefault();

  return (
    <div className="sliderarea">
      <h3>お客様の声</h3>
      <p>たくさんの方々に反響を頂いております。</p>

      <div className="slider">
        <AliceCarousel mouseTrackingEnabled>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </AliceCarousel>
      </div>
    </div>
  );
};
