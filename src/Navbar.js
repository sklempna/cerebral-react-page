import React, { useState } from "react";
import logo from "./assets/img/logo-white-trademark.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

import CookieConsent from "react-cookie-consent";

function Navbar() {
  const [burgerMenuIsActive, setBurgerMenuIsActive] = useState(false);

  return (
    <div>
      <nav class="flex md:container pt-5 md:mx-auto justify-between items-center bg-black text-white">
        {/* <!-- Logo & Menu --> */}
        <div class="flex px-10 items-center">
          <div>
            <Link to="/">
              {" "}
              <img src={logo} class="w-[200px] lg:w-[350px]" alt="" />
            </Link>
          </div>
          <div class="hidden md:flex text-lg lg:text-xl space-x-2 pl-3 ml-10 md:space-x-10 lg:pl-20">
            {/* <!-- <div class="animate-jitter">sdfsdfsdfsdf</div> -->
        <!-- <a href="#" class="animate-wiggle"
          >Live</a
        >
        <a href="" class="hover:text-red-800 transition duration-300"
          >Store</a> --> */}
            <div class="hover:text-red-800 transition duration-500 cursor-pointer">
              <Link to="/Live">Live</Link>
            </div>
            <div class="hover:text-red-800 transition duration-500 cursor-pointer">
              <Link to="/Store">Store</Link>
            </div>
          </div>
        </div>
        {/* <!-- Socials --> */}
        <div class="hidden md:flex md:space-x-5 lg:space-x-10 items-center px-10">
          <a
            href="https://www.facebook.com/Cerebralinvasion"
            target="_blank"
            class="hover:text-red-800 transition duration-300 fa fa-facebook fa-lg"
          ></a>
          <a
            href="https://open.spotify.com/intl-de/artist/3ORji0q2JI385aRurdzdjK"
            target="_blank"
            class="hover:text-red-800 transition duration-300 fa fa-spotify fa-lg"
          ></a>
          <a
            href="https://cerebralinvasion.bandcamp.com"
            target="_blank"
            class="hover:text-red-800 transition duration-300 fa fa-bandcamp fa-lg"
          ></a>
          <a
            href="https://www.instagram.com/cerebralinvasion"
            target="_blank"
            class="hover:text-red-800 transition duration-300 fa fa-instagram fa-lg"
          ></a>
          <a
            href="https://www.youtube.com/@cerebralinvasion3138"
            target="_blank"
            class="hover:text-red-800 transition duration-300 fa fa-youtube fa-lg"
          ></a>
        </div>
        {/* <!-- Hamburger Icon --> */}
        <div class="md:hidden relative flex-grow h-[25px]">
          <div class="absolute right-10">
            <button
              id="menu-btn"
              onClick={() => setBurgerMenuIsActive(!burgerMenuIsActive)}
              className={`${
                burgerMenuIsActive ? "open" : ""
              } block hamburger focus:outline-none`}
            >
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>
            </button>
          </div>
          {/* <!-- Mobile Menu --> */}
          <div class="">
            <div
              id="menu"
              className={`${
                burgerMenuIsActive ? "flex" : "hidden"
              } z-10 absolute flex-col items-center py-8 mt-10 space-y-6 bg-skulls bg-contain w-screen self-center drop-shadow-md right-0`}
            >
              <div
                class="hover:text-red-800 transition duration-300"
                onClick={() => setBurgerMenuIsActive(false)}
              >
                <Link to="/">Home</Link>
              </div>
              <div
                class="hover:text-red-800 transition duration-300"
                onClick={() => setBurgerMenuIsActive(false)}
              >
                <Link to="/Live">Live</Link>
              </div>
              <div
                class="hover:text-red-800 transition duration-300"
                onClick={() => setBurgerMenuIsActive(false)}
              >
                <Link to="/Store">Store</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
