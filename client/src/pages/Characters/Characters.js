import React, { useState } from "react";
import Carousel from "./Carousel/Carousel";
import { SliderData } from "./Carousel/CharacterData";
import "./Characters.css";

export default function Contact() {
  const [info, setInfo] = useState(SliderData[0]);
  console.log(info);

  const name = info.name;
  const image = info.image;
  const wiki = info.wiki;
  const homeworld = info.homeworld;
  const species = info.species;
  const affiliations = info.affiliations;
  const appearances = info.appearances;

  function carouselClick() {
    const slide = localStorage.getItem("info");

    if (slide) {
      setInfo(JSON.parse(slide));
    }
  }

  const [movie, setMovie] = useState(info.appearances[0]);
  const [watchList, setWatchList] = useState(info.watchList[0]);

  function addToWatchList(e) {
    e.preventDefault();

    console.log("Add to WatchList button clicked");
    console.log(movie);
    console.log(watchList);
  }

  const options = ["WatchList 1", "WatchList 2", "WatchList 3"];

  return (
    <div className="container justify-content-center my-5">
      <div className="col-12 row bg-secondary rounded">
        <div className="col-12 col-md-4 row">
          <img src={image} className="col-8 mx-auto my-auto upper-image" />
        </div>
        <div className="col-12 col-md-4 my-auto row">
          <div className="info info-name">{name}</div>
          <div className="info info-species">{species}</div>
          <div className="info info-affiliations">{homeworld}</div>
          <div className="info info-affiliations">
            {affiliations.map((list, index) => (
              <div key={index}>{list}</div>
            ))}
          </div>
          <div className="info info-wiki">
            <a className="link" href={wiki}>
              {wiki}
            </a>
          </div>
        </div>
        <div className="col-12 col-xl-4 row d-flex align-items-center justify-content-center">
          <form className="col-12 d-flex flex-column justify-content-center">
            <label>
              <select
                className="form-control"
                onChange={(e) => setMovie(e.target.value)}
              >
                {/* Takes appearance response and iterates over each  */}
                {appearances.map((list, index) => (
                  <option key={index} value={list}>
                    {list}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <select
                className="justify-content-center form-control"
                onChange={(e) => setWatchList(e.target.value)}
              >
                {/* Takes option response and iterates over each  */}
                {options.map((list, index) => (
                  <option key={index} value={list}>
                    {list}
                  </option>
                ))}
                {console.log(options)}
              </select>
            </label>
            <button
              className="col-4 btn btn-dark text-light justify-content-center"
              onClick={addToWatchList}
            >
              Add To WatchList
            </button>
          </form>
        </div>
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
