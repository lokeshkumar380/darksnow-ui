import React from "react";
import SliderComponent from "./components/Slider/SliderComponent.js";
import Headingbar from "./components/HeadingBar/Headingbar.js";
import ImageText from "./components/ImageText/ImageText.js";
import Catalouge from "./components/Catalouge/Catalouge.js";
import "./App.css";
import Dashboard from "./components/Dashboard/dashboard.js";
import PrivateRoute from "./components/PrivateRoute/private_router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
//import NotFound from "./components/Dashboard/not_found";
class App extends React.Component {
  state = {
    auth: false,
    setAuth: ""
  };

  setAuth = value => {
    this.setState({ auth: value });
  };

  render() {
    return (
      <div class="maincontainer">
        <Router>
          <Switch>
            <Route exact path="/" component={App}>
              <div className="row" style={{ height: "68px" }}>
                <Headingbar onAuthSet={this.setAuth} />
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

            <PrivateRoute
              exact
              path="/admin"
              component={Dashboard}
              auth={this.state.auth}
            />
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

function NotFound() {
  return (
    <div>
      <h1>Page Not Found 404</h1>
    </div>
  );
}

export default App;
