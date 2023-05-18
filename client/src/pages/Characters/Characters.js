import React, { useState } from "react";
import Appearances from "./Appearances/Appearances";
import Carousel from "./Carousel/Carousel";
import { SliderData } from "./Carousel/CharacterData";
import DropDown from "../../components/DropDown";
import "./Characters.css";

export default function Contact() {
  const [info, setInfo] = useState(SliderData[0]);
  console.log(info);

  const name = info.name;
  const image = info.image;
  const wiki = info.wiki;
  const born = info.born;
  const died = info.died;
  const species = info.species;
  const affiliations = info.affiliations;

  function carouselClick() {
    const slide = localStorage.getItem("info");

    if (slide) {
      setInfo(JSON.parse(slide));
    }
  }

  function addToList(event) {
    event.preventDefault();

    console.log("button Clicked");
  }

  return (
    <div className="container justify-content-center my-5">
      <div className="col-12 row bg-secondary rounded">
        <div className="col-12 col-md-4 row">
          <img src={image} className="col-8 mx-auto my-auto upper-image" />
        </div>
        <div className="col-12 col-md-4 my-auto row">
          <div className="info info-name">{name}</div>
          <div className="info info-life">
            {born} and {died}
          </div>
          <div className="info info-species">{species}</div>
          <div className="info info-affiliations">{affiliations}</div>
          <div className="info info-wiki">
            <a className="link" href={wiki}>
              {wiki}
            </a>
          </div>
        </div>
        <form className="col-12 col-md-4 row">
          <div className="col-12">Appearences</div>
          <div className="col-12 col-xl-6">
            <Appearances onClick={addToList} />
          </div>
          <div className="col-12 col-xl-6">
            <DropDown />
          </div>
        </form>
      </div>
      <div
        className="col-6 row mx-auto my-5 bg-secondary rounded"
        onClick={carouselClick}
      >
        <Carousel slides={SliderData} />
      </div>
    </div>
  );
}
