import React from "react";
import SliderComponent from "./components/Slider/SliderComponent.js";
import Headingbar from "./components/HeadingBar/Headingbar.js";
import ImageText from "./components/ImageText/ImageText.js";
import Catalouge from "./components/Catalouge/Catalouge.js";
import "./App.css";
import Dashboard from "./components/Dashboard/dashboard.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div class="maincontainer">
        <Router>
          <Switch>
            <Route path="/home" component={App}>
              <div className="row" style={{ height: "68px" }}>
                <Headingbar />
              </div>
              <div className="row">
                <SliderComponent />
              </div>
              <div className="row">
                <ImageText />
              </div>
              <div className="row">
                <Catalouge />
              </div>
            </Route>
            <Route path="/admin" component={Dashboard}>
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
