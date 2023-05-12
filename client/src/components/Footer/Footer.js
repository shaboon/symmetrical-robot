import React from "react";
import style from "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="foot">
        <section className="login-container">
          <form>
            <input
              className="name-input info"
              type="text"
              placeholder="Username"
            ></input>
            <input
              className="pass-input info"
              type="password"
              placeholder="Password"
            ></input>
            <button className="submit info">I/O</button>
          </form>
        </section>
      </footer>
    </div>
  );
}
