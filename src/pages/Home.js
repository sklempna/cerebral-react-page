import React from "react";
import { Link } from "react-router-dom";

import bandpic from "../assets/img/Cerebral Invasion Band 4JPG.JPG";
import albumpic from "../assets/img/album-cover-final15.jpg";

function Home() {
  return (
    <div class="container mx-auto mt-5">
      {/* <!-- New Album Section --> */}
      <div class="bg-demon bg-center py-5 md:py-10 flex flex-col items-center space-y-5 md:space-y-10 lg:bg-cover backdrop-blur-sm text-white">
        <h1 class="text-xl lg:text-4xl">New Album Out Now</h1>
        <div
          href="#"
          class="hover:animate-jitter cursor-pointer text-lg lg:text-xl bg-gray-900 px-5 py-3 hover:bg-red-800 transition duration-500"
        >
          <Link to="/Store">Order Now</Link>
        </div>

        <div class="lg:pt-60">
          <img
            src={albumpic}
            class="w-2/3 lg:w-1/2 mx-auto shadow-xl shadow-red-800"
            alt=""
          />
        </div>
      </div>
      {/* <!-- Band members --> */}
      <div>
        <div class="flex justify-center text-gray-300 text-center text-md md:text-2xl pt-10 md:pt-20">
          <h1 class="">
            Cerebral Invasion is the result of{" "}
            <span class="text-red-800">pure hatred</span>
          </h1>
        </div>
        <div class="py-5 md:py-20 bg-skulls bg-cover text-white">
          <img src={bandpic} class="w-2/3 mx-auto" alt="" />
          <div class="text-gray-300 text-center w-2/3 mx-auto pt-10">
            <p>
              After numerous disappointments in his life, singer Mahmood's
              frustration reached an unbearable level.
            </p>
            <p>
              Instead of losing his mind, he decided to put together a band.
            </p>
            <p>This band brings utter thrash metal madness over the world.</p>
          </div>
        </div>
      </div>
      {/* <!-- youtube video --> */}
      <div class="bg-blood bg-cover">
        <iframe
          class="mx-auto py-20 w-screen h-[500px] md:w-[680px] md:h-[500px] xl:w-[1024px] xl:h-[880px]"
          src="https://www.youtube.com/embed/ntQbczrVNHs?si=SYtSVyjd0VLhO2QT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      {/* <!-- Copyright --> */}
      <div class="text-sm text-gray-300">
        <p>© Cerebral Invasion 2024</p>
      </div>
    </div>
  );
}

export default Home;
