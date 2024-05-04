import React from "react";
import merchDemon from "../assets/img/merch_demon.png";

function Store() {
  return (
    <div class="container mx-auto mt-10 flex flex-col text-center">
      <h1 className="text-white text-4xl mb-5">Coming soon</h1>
      <div className="flex w-full justify-center pb-20">
        <img className="w-1/2" src={merchDemon}></img>
      </div>
    </div>
  );
}

export default Store;