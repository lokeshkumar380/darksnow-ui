import React from "react";
import SliderComponent from "./components/Slider/SliderComponent.js";
import Headingbar from "./components/HeadingBar/Headingbar.js";
import ImageText from "./components/ImageText/ImageText.js";
import Catalouge from "./components/Catalouge/Catalouge.js";
import "./App.css";
import LoginScreen from "./components/UserValidation/LoginScreen.js";
class App extends React.Component {
  render() {
    return (
      <div class="main container">
        <div class="row" style={{ height: "68px" }}>
          <Headingbar />
        </div>
        <div class="row">
          <SliderComponent />
        </div>
        <div class="row">
          <ImageText />
        </div>
        <div class="row">
          <Catalouge />
        </div>
        <div class="row">
          <LoginScreen />
        </div>
      </div>
    );
  }
}

export default App;
