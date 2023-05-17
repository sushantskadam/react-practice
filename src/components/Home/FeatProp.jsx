import React, { useState } from "react";
import "./FeatProp.css";
import cardImg1 from "../../assets/images/cardImg1.png";
import { useNavigate } from "react-router-dom";
function FeatProp() {
  const navigate=useNavigate();
  const [featProp, setFeatProp] = useState([
    {
      id: 1,
      title: "Residential Properties ",
      desc: "Find and invest in a property you could own! ",
      img: "cardImg1.png",
    },
    {
      id: 2,
      title: "Commercial Properties ",
      desc: "Change the way you work with our workspaces, designed especially for better productivity. ",
      img: "cardImg2.png",
    },
  ]);
  return (
    <div className="featprop">
      <div className="container">
        <div className=" d-flex justify-content-between feat_prop_head">
          {" "}
          <h1 className="text-white">Our Featured Properties</h1>
          <button className="btn_addprop" onClick={()=>navigate("/addprop")}>Add a property </button>{" "}
        </div>
        {/* <div className="row"><div className="text-white col-6"><img src=""></img>1st card</div><div className="text-white col-6"> 2nd card</div></div> */}
        <div className="row">
          {featProp.map((card) => {
            console.log(`../../assets/images/${card.img}`);
            return (
              <>
                <div className="col-lg-6">
                  <div className="feat_card ">
                    <img
                      className="card_img"
                      src={require(`../../assets/images/${card.img}`)}
                    ></img>
                    <div className="card_text">
                      {" "}
                      <h2>{card.title}</h2> <p>{card.desc} </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeatProp;
