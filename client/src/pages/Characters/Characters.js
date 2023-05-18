import React, { useState, useEffect } from "react";
import Appearances from "./Appearances/Appearances";
import Carousel from "./Carousel/Carousel";
import { SliderData } from "./Carousel/CharacterData";
import DropDown from "../../components/DropDown";
import "./Characters.css";

export default function Contact() {
  // const slideClick = document.querySelector(".slide");
  // const infoImage = document.querySelector(".upper-image");
  // const infoName = document.querySelector(".info-name");
  // const infoBornAndDied = document.querySelector(".info-life");
  // const infoSpecies = document.querySelector(".info-species");
  // const infoAffiliations = document.querySelector(".info-affiliations");
  // const infoWiki = document.querySelector(".info-wiki");

  const [info, setInfo] = useState(SliderData[0]);

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
  // Code on line 32 "[]" breaks code to make it run only once, need to create onClick functionality to make it work

  return (
    <div className="container justify-content-center my-5">
      <div className="col-12 row bg-light rounded">
        <div className="col-12 col-md-4 row">
          <img src={image} className="col-8 mx-auto my-auto upper-image" />
        </div>
        <div className="col-12 col-md-4 my-auto row">
          <div className="info-name">{name}</div>
          <div className="info-life">
            {born} and {died}
          </div>
          <div className="info-species">{species}</div>
          <div className="info-affiliations">{affiliations}</div>
          <div className="info-wiki">{wiki}</div>
        </div>
        <form className="col-12 col-md-4 row">
          <div className="col-12">Appearences</div>
          <div className="col-12 col-xl-6">
            <Appearances />
          </div>
          <div className="col-12 col-xl-6">
            {/* Turn Line Below to Drop Down For WatchLists */}
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
