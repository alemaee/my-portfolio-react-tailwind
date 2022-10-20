import React from "react";
import heroImg from "../assets/heroImage.png";

function Hero() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto p-8">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="text-2xl font-hF">hello,</h1>
          <p className=" text-5xl md:text-7xl font-bold font-bF">
            I'm Elamae. A Designer
          </p>
          <p className="text-1 font-bF py-5">
            I love designing simple things and also I'm a frontend developer.
          </p>
        </div>
        <img src={heroImg} alt="/" className="w-full drop-shadow-lg p-3" />
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
