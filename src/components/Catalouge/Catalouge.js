import React from "react";
import "./Catalouge.css";
import ImageText from "../ImageText/ImageText.js";

class Catalouge extends React.Component {
  render() {
    return (
      <div class="Catalouge_container">
        <div class="row">
          <div
            class="column"
            style={{
              display: "block",
              width: "45%",
              padding: "15px",
              position: "relative",
              float: "left"
            }}
          >
            <a href="< ImageText />">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/DOTD-Desktop-men--3--1578658747.jpg"
                alt="For Men"
                style={{ width: "100%" }}
              />
              <div class="catalouge_centered">
                <h1>For Men</h1>
              </div>
            </a>
          </div>

          <div
            class="column"
            style={{
              display: "block",
              width: "45%",
              float: "left",
              padding: "15px",
              position: "relative"
            }}
          >
            <a href="https://www.bewakoof.com/design-of-the-day/gender-women">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/DOTD-Desktop-women--3--1578658748.jpg"
                alt="For Women"
                style={{ width: "100%" }}
              />
              <div class="catalouge_centered">
                <h1>For Women</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Catalouge;
