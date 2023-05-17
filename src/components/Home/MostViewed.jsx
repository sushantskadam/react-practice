import React, { useState } from "react";
import "./MostViewed.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import mostViewedLeft from "../../assets/images/mostViewedLeft.png";
import mostViewedRight from "../../assets/images/mostViewedRight.png";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineArrowRight } from "react-icons/ai";
function MostViewed() {
  const [windowWidth, setWindowWidth] = useState()
  // console.log(window.innerHeight,window.innerWidth);
  const [mostViewed, setMostViewed] = useState([
    {
      name: "Q5",
      loc: "MIDC, Navi Mumbai",
      type: "2 and 3 BHK Apartments",
      img: "mostViewed1.png",
    },
    {
      name: "R 4  R 5",
      loc: "MIDC, Navi Mumbai",
      type: "2 and 3 BHK Apartments",
      img: "mostViewed2.png",
    },
    {
      name: "Q5",
      loc: "MIDC, Navi Mumbai",
      type: "2 and 3 BHK Apartments",
      img: "mostViewed3.png",
    },
    {
      name: "Q5",
      loc: "MIDC, Navi Mumbai",
      type: "2 and 3 BHK Apartments",
      img: "mostViewed1.png",
    },
    {
      name: "R 4  R 5",
      loc: "MIDC, Navi Mumbai",
      type: "2 and 3 BHK Apartments",
      img: "mostViewed2.png",
    },
    {
      name: "Q5",
      loc: "MIDC, Navi Mumbai",
      type: "2 and 3 BHK Apartments",
      img: "mostViewed3.png",
    },
    {
      name: "Q5",
      loc: "MIDC, Navi Mumbai",
      type: "2 and 3 BHK Apartments",
      img: "mostViewed1.png",
    },
    {
      name: "R 4  R 5",
      loc: "MIDC, Navi Mumbai",
      type: "2 and 3 BHK Apartments",
      img: "mostViewed2.png",
    },
    {
      name: "Q5",
      loc: "MIDC, Navi Mumbai",
      type: "2 and 3 BHK Apartments",
      img: "mostViewed3.png",
    },
  ]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth>995 ? 3:1,
    slidesToScroll: window.innerWidth>995 ? 3:1,
    arrows: false,
  };
  window.addEventListener("resize", function() {
     setWindowWidth(window.innerWidth);
     return (window.innerWidth)
  });
  return (
    <div className="most_viewed">
      <div className="container">
        <h1 className="text-white">Our Most-Viewed Properties </h1>
        <Slider {...settings}>
          {mostViewed.map((prop) => {
            return (
              <div className="most_viewed_card">
                <img
                  className="card-img-top most_viewed_card_img"
                  //   src={prop.img}
                  src={require(`../../assets/images/${prop.img}`)}
                  alt="Card image cap"
                />
                <div className="card-body most_viewed_card_body">
                  <div className="d-flex justify-content-between align-items-center">
                    {" "}
                    <span>{prop.name}</span>{" "}
                    <span>
                      <SlLocationPin />
                      {prop.loc}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center my-4">
                    {" "}
                    <div className="d-flex mostviewed_prop_imgtext">
                      <img
                        className="mostviewed_card_smallImg"
                        src={mostViewedLeft}
                      />{" "}
                      <div className="mx-3  d-flex flex-column justify-content-between">
                        {" "}
                        <span className="text-secondary mostviewed_type ">
                          Area
                        </span>{" "}
                        <span className="mostviewed_sqft">1172 Sq.ft - 2636 Sq.ft</span>
                      </div>
                    </div>{" "}
                    <div className="d-flex mostviewed_prop_imgtext">
                      <img
                        className="mostviewed_card_smallImg"
                        src={mostViewedRight}
                      />
                      <div className="mx-3  d-flex flex-column justify-content-between">
                        <span className="text-secondary mostviewed_type">
                          Total Units
                        </span>
                        <span className="mostviewed_sqft">108 Units</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    {" "}
                    <span className="mostviewed_type">{prop.type}</span>{" "}
                    <span className="mostviewed_viewonmap">
                      View on Map <AiOutlineArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default MostViewed;
