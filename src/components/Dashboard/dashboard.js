import React, { Component } from "react";
import TitlebarGridList from "./designerpictures";
//import "bootstrap/dist/css/bootstrap.css";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <TitlebarGridList />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
