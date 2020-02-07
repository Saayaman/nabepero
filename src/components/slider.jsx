// import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

// const responsive = {
//   0: { items: 1 },
//   1024: { items: 2 }
// };

// export const Slider = () => {
//   return (
//     <div id="testimonial" className="sliderarea">
//       <h3>お客様の声</h3>
//       <p>たくさんの方々に反響を頂いております。</p>

//       <div className="slider">
//         <AliceCarousel responsive={responsive} mouseTrackingEnabled>
//           <div className="card"></div>
//           <div className="card"></div>
//           <div className="card"></div>
//           <div className="card"></div>
//         </AliceCarousel>
//         <button onClick={() => AliceCarousel.slidePrev()}>Prev button</button>
//         <button onClick={() => AliceCarousel.slideNext()}>Next button</button>
//       </div>

      

//       <button>今すぐ無料相談！</button>
//     </div>
//   );
// };

import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Button from './button'

import avatar1 from "../assets/images/avatar1.png";

const testimonialsData = [
  {
    image: avatar1,
    name: "鈴木めぐみ",
    position: "株式会社スズキ　代表取締役CEO",
    comment: "「対応が丁寧で的確でした。今後もお願いしようと思います」",
  },
  {
    image: avatar1,
    name: "鈴木めぐみ",
    position: "株式会社スズキ　代表取締役CEO",
    comment: "「対応が丁寧で的確でした。今後もお願いしようと思います」",
  },
  {
    image: avatar1,
    name: "鈴木めぐみ",
    position: "株式会社スズキ　代表取締役CEO",
    comment: "「対応が丁寧で的確でした。今後もお願いしようと思います」",
  },
  {
    image: avatar1,
    name: "鈴木めぐみ",
    position: "株式会社スズキ　代表取締役CEO",
    comment: "「対応が丁寧で的確でした。今後もお願いしようと思います」",
  },
  {
    image: avatar1,
    name: "鈴木めぐみ",
    position: "株式会社スズキ　代表取締役CEO",
    comment: "「対応が丁寧で的確でした。今後もお願いしようと思います」",
  }
]


export class Slider extends React.Component {
  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: { 0: { items: 3 } },
    galleryItems: this.galleryItems(),
  }

  galleryItems() {
    return testimonialsData.map(({ image, name, position, comment}, i) => 
      <div className="Slider-item">
        <div className="testimonial-title">
          <div className="Slider-item-borderline" />
          <div className="Slider-item-imageWrapper">
            <div className="Slider-item-number">{`0${i+1}`}</div>
            <img src={image} alt="avatar photo" />
          </div>
          <div className="Slider-item-nameWrapper">
            <h4>{name}</h4>
            <text>{position}</text>
          </div>
        </div>
        <p className="Slider-item-comment">{comment}</p>
      </div>
    )
  }

  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide
    this.setState({ currentIndex })
  }

  slideNextPage = () => {
    const {
      itemsInSlide,
      galleryItems: { length },
    } = this.state
    let currentIndex = this.state.currentIndex + itemsInSlide
    if (currentIndex > length) currentIndex = length

    this.setState({ currentIndex })
  }

  handleOnSlideChange = (event) => {
    const { itemsInSlide, item } = event
    this.setState({ itemsInSlide, currentIndex: item })
  }

  render() {
    const { currentIndex, galleryItems, responsive } = this.state

    return (
      <div id="testimonial" className="testimonial">
        <h3>お客様の声</h3>
        <div>
          <AliceCarousel
            items={galleryItems}
            slideToIndex={currentIndex}
            responsive={responsive}
            onInitialized={this.handleOnSlideChange}
            onSlideChanged={this.handleOnSlideChange}
            onResized={this.handleOnSlideChange}
          />
        </div>
      </div>
    )
  }
}