import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import Logo from "../../assets/images/logo.png";
export const navbarDown = () => {
  document
    .getElementById("mobile-navbar")
    .classList.toggle("mobile-navbar-down");
  document.getElementById("body-overlay").classList.toggle("d-block");
};
export default function Navbar() {
  const location = useLocation();
  
  // console.log(location);

  const [navbar, setNavbar] = useState(false)

  //logo scroll when active
  const [navbarLogo, setNavbarLogo] = useState()

  //navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  const pcnavbar = () => {
    document
      .getElementById("mobile-navbar")
      .classList.remove("mobile-navbar-down");
    document.getElementById("body-overlay").classList.remove("d-block");
  };

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth <= 992 ? "" : pcnavbar()
    );
  }, []);
  useEffect(() => {
    const navitems = document.getElementsByClassName("navbar-link");
    for (const item of navitems) {
      item.classList.remove("active");
      if (location.pathname !== "/" && item.href.includes(location.pathname)) {
        item.classList.add("active");
      }
      if (item.href.includes("auth") && location.pathname.includes("auth")) {
        item.classList.add("active");
      }
      if (item.href.includes("blogs") && location.pathname.includes("blogs")) {
        item.classList.add("active");
      }
    }
  }, [location]);

  return (
    <>
      <div
    
        className={`navbar-planet navbar   ${
          navbar ? "navbar_bg" : "bg-transperent"
        }`}
      >
        <div className="container navbar-container ">
          <div className="logo-box">
            <Link to="/">
              <img
                src={Logo}
                alt="aurum-infinity "
                onClick={() => {
                  if (
                    window.innerWidth < 990 &&
                    document
                      .getElementById("mobile-navbar")
                      .classList["value"].includes("mobile-navbar-down")
                  ) {
                    navbarDown();
                  }
                }}
              />
            </Link>
          </div>
          <FaBars className="navbar-hamburger" onClick={navbarDown} />
          <div className="navitems">
            <Link className="navbar-link" to="/blogs">
              Blogs
            </Link>

            <Link className="navbar-link" to="/properties">
              About Us
            </Link>
            <Link className="navbar-link" to="/#ContactUs">
              Contact Us
            </Link>
            <Link className="navbar-link" to="/auth/login">
              Login
            </Link>

            {/* {state.isLoggedIn ? (
              <Link className="navbar-link" to="/panel">
                {state.user.name}
              </Link>
            ) : (
              <>
                <Link className="navbar-link" to="/auth/investor/login">
                  Login/SignUp
                </Link>
              </>
            )} */}
          </div>
        </div>
      </div>

      {/* mobile navbar start here */}
      <div className="mobile-navbar text-center " id="mobile-navbar">
        <Link
          className="mobile-navbar-links  d-block "
          // onClick={navbarDown}
          to="/blogs"
        >
          blogs
        </Link>

        <Link
          className="mobile-navbar-links  d-block"
          // onClick={navbarDown}
          to="/properties"
        >
          About Us
        </Link>
        <Link
          className="mobile-navbar-links  d-block"
          onClick={navbarDown}
          to="/#ContactUs"
        >
          Contact Us
        </Link>
        <Link
          className="mobile-navbar-links  d-block"
          // onClick={navbarDown}
          to="/auth/login"
        >
          Login
        </Link>
      </div>
    </>
  );
}
