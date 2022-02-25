import React from "react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const ImageCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={13}
      infinite="true"
      totalSlides={5}
      isPlaying="true"
      interval={2000}
    >
      <Slider>
        <Slide index={0}>
          <Image
            src={require("../Images/headShot.jpeg")}
            style={{ display: "block", margin: "0 auto", width: "30%" }}
          />
        </Slide>
        <Slide index={1}>
          <Image
            src={require("../Images/FrontEndCert.jpeg")}
            style={{ display: "block", margin: "0 auto", width: "30%" }}
          />
        </Slide>
        <Slide index={2}>
          <Image
            src={require("../Images/FullStackCertification.png")}
            style={{ display: "block", margin: "0 auto", width: "30%" }}
          />
        </Slide>
        <Slide index={3}>
          <Image
            src={require("../Images/FEGraduationDaniel.jpeg")}
            style={{ display: "block", margin: "0 auto", width: "20%" }}
          />
        </Slide>
        <Slide index={4}>
          <Image
            src={require("../Images/FEGraduationChoc.jpeg")}
            style={{ display: "block", margin: "0 auto", width: "20%" }}
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default ImageCarousel