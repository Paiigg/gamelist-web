import React from "react";
import Banner from "../assets/banner.svg";

const Hero = () => {
  return (
    <div className="">
      <img src={Banner} alt="" className="w-full object-cover h-screen" />
      <div className="absolute text-white md:w-[40%] px-4 top-[50%] translate-y-[-50%] left-[5%]  ">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-5xl font-bold">Multi Versus</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto animi
            ullam quisquam laboriosam distinctio fugit, veniam tenetur nam,
            corrupti ipsam incidunt praesentium dolore nisi accusantium!
          </p>
          <button className="bg-primary px-4 py-2 rounded-md md:w-[100px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
