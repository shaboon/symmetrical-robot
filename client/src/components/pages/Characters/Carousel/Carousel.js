import React, { useState } from "react";
import { SliderData } from "./CharacterData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../Characters.css";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="container slider">
      <FaArrowAltCircleLeft
        className="col-6 col-md-2 row left-arrow"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="col-6 col-md-2 row right-arrow"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "slide active mx-auto justify-content-center"
                : "slide"
            }
            key={index}
          >
            {index === current && <h1 className="name"> {slide.name} </h1>}
            {index === current && (
              <img
                src={slide.image}
                alt="star wars character image"
                className="image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
