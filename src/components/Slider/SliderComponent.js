import React from "react";
import Slider from "react-slick";
import './SliderComponent.css';

const photos = [
  {
    name:"photo1",
    url:"https://images.bewakoof.com/uploads/grid/app/underslider-desk-1578655850.gif"
  },
  {
    name:"photo2",
    url:"https://images.bewakoof.com/uploads/grid/app/decade-desktop-1578548230.jpg"
  }
]
class SliderComponent extends React.Component {
    render() {
      var settings = {
        dots: true,
        autoplaySpeed: 2000,
        infinite :true,
        fade: true,
        centerMode:true,
        arrows :true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay :true,
      };
      return (
        <Slider {...settings}>
          { photos.map((photo) => {
            return(
             <div class="slidercontainer" >
                <img width="100%" alt={photo.name} src={photo.url}/>
             </div>
            )
          })}
        </Slider>
      );
    }
  }
  export default SliderComponent;