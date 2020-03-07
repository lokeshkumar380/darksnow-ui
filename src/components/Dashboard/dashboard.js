import React, { Component } from "react";
import TitlebarGridList from "./designerpictures";
import SearchAppBar from "./app_bar";
//import "bootstrap/dist/css/bootstrap.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { black } from "material-ui/styles/colors";
import store, { saveState } from "../state/app_state";
import { createStore } from "redux";
import slidingImagesReducer from "../reducer/images_reducer";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));
class Dashboard extends Component {
  //const classes = useStyles();

  state = {
    setImage: false,
    appbar: { id: 1, value: "Admin" },
    selectedImages: [],
    data: ""
  };

  selectImage = (event, image) => {
    let array = this.state.selectedImages;
    array.push(image);
    console.info(event.target.checked);

    if (event.target.checked) {
      this.setState({
        setImage: event.target.checked,
        selectedImages: array
      });
    } else {
      const images = array.filter(img => img.author !== image.author);
      this.setState({
        selectedImages: images
      });
    }
  };

  updateImagesToSlider = () => {
    store.subscribe(() => {
      saveState(store.getState());
    });
    store.dispatch({
      type: "UPDATE_IMAGES_TO_SLIDER",
      payload: this.state.selectedImages
    });
    this.setState({ setImage: false });
  };

  buttonStyles = {
    left: 1000,
    bottom: 484
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <SearchAppBar value={this.state.appbar.value} />
          <TitlebarGridList onSelectImage={this.selectImage} />

          <Button
            variant="contained"
            disabled={!this.state.setImage}
            color="secondary"
            style={this.buttonStyles}
            onClick={this.updateImagesToSlider}
            // onClick={() => this.props.setImages(this.state.selectedImages)}
          >
            Set to Sliding Window
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
