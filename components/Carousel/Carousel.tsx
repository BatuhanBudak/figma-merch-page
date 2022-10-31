import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { caroseulSvgs } from "./CarouselSvg";
import { DonationBadge } from "../Icon";

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
      responsive: [
        {
          breakpoint: 3000,
          settings: {
            slidesToShow: 3.5,
          },
        },
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 2.75,
          },
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 788,
          settings: {
            slidesToShow: 1.25,
          },
        },
      ],
    };

    const caroseulItems = Array.from({ length: 8 }, (v, i) => i).map((_, i) => (
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
          <a href="" className="donation-badge-link">
            <DonationBadge />
          </a>
        </div>
      </section>
    );
  }
}
