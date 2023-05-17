import React from "react";
import "./HomeBanner.css";
import homebanner from "../../assets/images/homebanner.png";
import { AiFillPlayCircle } from 'react-icons/ai';
function HomeBanner() {
  return (
    <div className="homebanner pt-5">
      <div className="container py-4">
        <div className="flex_class_homebanner">
          <div className="homebanner_left">
            <h1>Revolutionize Site Visits with Aurum Planet</h1>{" "}
            <p className="py-3">
              Our platform offers immersive high quality 360 Virtual Reality
              tours for real estate for mobile and other devices.{" "}
            </p>
            <span className="btn_getstarted">Get Started</span>{" "}
            <span className="btn_watchvideo "> Watch Video <AiFillPlayCircle size={22}/> </span> 
          </div>
          <div className="homebanner_right">
            {" "}
            <img src={homebanner}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
