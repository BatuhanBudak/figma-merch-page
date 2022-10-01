import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import range from "lodash/range";
import { useRef } from "react";
import { caroseulSvgs } from "./CarouselSvg";

export default class Carousel extends Component {
  render() {
    const imageText = [
      "Figma logo pin",
      "Rainbow logo tee",
      "Bezier water bottle",
      "Figma embroidered hoodie",
      "Figma wordmark tee",
      "Lightgrey comment icon socks",
      "Throw blanket",
      "Blue Figma hat",
    ];
    const settings = {
      infinite: true,
      speed: 500,
      swipeToSlide: true,
      easing: "ease",
      initialSlide: 1,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 3000,
          settings: {
            slidesToShow: 3.25,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 2.75,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 1.8,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 788,
          settings: {
            slidesToShow: 1.25,
            initialSlide: 1,
          },
        },
      ],
    };

    const caroseulItems = range(0, 8).map((_, i) => (
      <div className="link-container" key={i}>
        <a className="side-link" href="">
          <div className="hover-text">{imageText[i]}</div>
          <div className="snippet--cutout-image">{caroseulSvgs[i]()}</div>
        </a>
      </div>
    ));

    return (
      <section className="shopify-section shopify-section--carousel-hero">
        <div className="section--carousel-hero">
          <Slider {...settings}>{caroseulItems}</Slider>
        </div>
      </section>
    );
  }
}
