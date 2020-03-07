import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
import Dashboard from "../Dashboard/dashboard";
import store, { loadState } from "../state/app_state";

var photos = [
  {
    title: "photo1",
    url:
      "https://images.bewakoof.com/uploads/grid/app/underslider-desk-1578655850.gif",
    author: "lokesh"
  },
  {
    name: "photo2",
    url:
      "https://images.bewakoof.com/uploads/grid/app/decade-desktop-1578548230.jpg",
    author: "shiva"
  }
];
class SliderComponent extends React.Component {
  state = {
    images: []
  };

  hideStyles = {
    display: "none"
  };

  render() {
    if (loadState().images) photos = loadState().images;
    var settings = {
      dots: true,
      autoplaySpeed: 2000,
      infinite: true,
      fade: true,
      centerMode: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <React.Fragment>
        <Slider {...settings}>
          {photos.map(photo => {
            return (
              <div class="slidercontainer" key={photo.author}>
                <img
                  class="images_container"
                  alt={photo.title}
                  src={photo.url}
                />
              </div>
            );
          })}
        </Slider>
      </React.Fragment>
    );
  }
}
export default SliderComponent;
