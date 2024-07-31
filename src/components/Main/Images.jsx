import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Images.scss";
import { Carousel } from "react-responsive-carousel";
function Images({ images }) {
  //   if (images.length != 0) {
  //     document.getElementById("images").style.height = "100vh";
  //   }
  return (
    <div id="carousel-div">
      <Carousel >
        {images.length != 0 &&
          images.map((items) => (
            <div>
              <img src={items} alt="" />
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default Images;
