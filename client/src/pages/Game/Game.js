import React from "react";
import "./game.css";

export default function About() {
  return (
    <div className="container row col-12 mx-auto my-5 p-3 bg-secondary console">
      <div className="col-2 row justify-content-center align-items-center game-filler light">
        JOIN THE FIGHT
      </div>
      <div className="col-8 row justify-content-center mx-auto">
        <iframe
          className="screen"
          src="https://www.retrogames.cc/embed/31371-star-wars-europe.html"
          width="600"
          height="450"
          frameborder="no"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          scrolling="no"
          title="Star Wars (Europe)"
        ></iframe>
      </div>
      <div className="col-2 row justify-content-center align-items-center game-filler dark">
        BEAT THE EMPIRE WITH BETTER AIM
      </div>
    </div>
  );
}
