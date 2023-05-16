import React from "react";
import Appearances from "./Appearances/Appearances";
import Carousel from "./Carousel/Carousel";
import { SliderData } from "./Carousel/CharacterData";
import "./Characters.css";

export default function Contact() {
  const name = "Luke Skywalker";
  const image = "https://starwars-visualguide.com/assets/img/characters/1.jpg";
  const wiki = "https://starwars.fandom.com/wiki/Luke_Skywalker";
  const born = "19 BBY";
  const died = "34 ABY";
  const species = "Human";
  const affiliations = "Jedi Order, Rebel Alliance, New Republic";

  return (
    <div className="container justify-content-center my-5">
      <div className="col-12 row bg-light rounded">
        <div className="col-12 col-md-4 row">
          <img src={image} />
        </div>
        <div className="col-12 col-md-4 row">
          <div>{name}</div>
          <div>
            {born} and {died}
          </div>
          <div>{species}</div>
          <div>{affiliations}</div>
          <div>{wiki}</div>
        </div>
        <div className="col-12 col-md-4 row">
          <div className="col-12">Appearences</div>
          <div className="col-12 col-xl-6">
            <Appearances />
          </div>
          <div className="col-12 col-xl-6">
            <Appearances />
          </div>
        </div>
      </div>
      <div className="col-6 row mx-auto my-5 bg-secondary rounded">
        <Carousel slides={SliderData} />
      </div>
    </div>
  );
}
