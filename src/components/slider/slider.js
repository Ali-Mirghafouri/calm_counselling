import Carousel from "nuka-carousel"
import React from "react"
import "./slider.css"
import {SLIDER} from "../../constant"
import {images} from "../../images"

export function Slider() {
  return (
    <Carousel
      dragging={false}
      renderCenterLeftControls={({previousSlide}) => (
        <img
          src={images.slider.arrow_back}
          alt="back arrow"
          onClick={previousSlide}
          className="slider_arrow_back"></img>
      )}
      renderCenterRightControls={({nextSlide}) => (
        <img
          src={images.slider.arrow_next}
          alt="next arrow"
          onClick={nextSlide}
          className="slider_arrow_next"></img>
      )}>
      {SLIDER.quote.map((q, index) => (
        <div key={"slide" + index.toString()} className="slide_inner_container">
          <div className="slider_content">{q}</div>
          <div className="slide_content_writer">{SLIDER.writer[index]}</div>
        </div>
      ))}
    </Carousel>
  )
}
