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
        className="col-6 col-md-2 row left-arrow arrow"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="col-6 col-md-2 row right-arrow arrow"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        const handleClick = () => {
          localStorage.setItem("info", JSON.stringify(slide));
        };
        return (
          <div className="d-flex justify-content-center" onClick={handleClick}>
            <div
              className={index === current ? "slide active mx-auto" : "slide"}
              key={index}
            >
              <div>{index === current && <h1> {slide.name} </h1>}</div>
              {index === current && (
                <div className="d-flex justify-content-center">
                  <img
                    src={slide.image}
                    alt="star wars character image"
                    className="image"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
