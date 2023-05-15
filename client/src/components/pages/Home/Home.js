import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="row col-12 mx-auto rounded my-5 bg-secondary">
        <p className="row col-3 mx-auto rounded justify-content-center align-items-center my-3 fillers">
          You Must Help Me Obi-Wan Kenobi
        </p>
        <div className="row col-6 mx-auto rounded justify-content-center align-items-center my-3 scrolling-text">
          <div className="frame">
            <div className="wrap">
              <div className="path">
                <p className="title">Episode IV</p>
                <p className="title">A New Hope</p>
                <p>
                  It is a period of civil war. Rebel spaceships, striking from a
                  hidden base, have won their first victory against the evil
                  Galactic Empire.
                </p>
                <p>
                  During the battle, rebel spies managed to steal secret plans
                  to the Empire's ultimate weapon, the DEATH STAR, an armored
                  space station with enough power to destroy an entire planet.
                </p>
                <p>
                  Pursued by the Empire's sinister agents, Princess Leia races
                  home aboard her starship, custodian of the stolen plans that
                  can save her people and restore freedom to the galaxy....
                </p>
                <p>
                  Welcome to the Interstellar Index, a Star Wars fan site. Here
                  you can find a character database with their appearences
                  throughout major Star Wars media, a list of the best Star Wars
                  media, and a game to test your knowledge of the Star Wars
                  universe.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="row col-3 mx-auto rounded justify-content-center align-items-center my-3 fillers">
          Emperor Palpatine Does Not Approve of The Content Found on this Site
        </p>
      </div>
      <div className="row col-12 mx-auto my-5 bg-secondary">
        <div className="row col-3 mx-5 rounded justify-content-center p-2 my-3">
          Light
          <div>More Content</div>
        </div>
        <div className="row col-3 mx-5 rounded justify-content-center p-2 my-3">
          Middle
          <div>More Content</div>
        </div>
        <div className="row col-3 mx-5 rounded justify-content-center p-2 my-3">
          Dark
          <div>More Content</div>
        </div>
      </div>
    </div>
  );
}
