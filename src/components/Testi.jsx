import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function Testi() {
  const profile = [
    {
      name: "Jacob Jones",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.",
      image: "profile1",
    },
    {
      name: "Kristin Watson",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.",
      image: "profile2",
    },
    {
      name: "Cameron Williamson",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.",
      image: "profile3",
    },
  ];

  return (
    <div className="lg:h-screen max-w-[1240px] mx-auto mb-10">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="p-4 mt-16 text-2xl font-bold md:text-4xl">
          12.000+ gamers satisfied
        </h3>
        <p className="  md:w-[500px] w-[300px] ">
          Let's hear what our customers have to say about their satisfaction
          with our services and products.
        </p>
      </div>
      <div className="flex flex-col items-center justify-around mt-10 space-y-8 md:space-y-0 md:flex-row">
        {profile.map((data) => (
          <div className="bg-white shadow-lg w-[297px] h-[296px] flex items-center justify-center text-center flex-col hover:scale-125 rounded-lg ease-in duration-300">
            <img
              src={require("../assets/" + data.image + ".svg")}
              className=""
              alt={data.name}
            />
            <p className="text-lg font-semibold">{data.name}</p>
            <div className="flex items-center ">
              <AiFillStar color="#EDAB00" />
              <AiFillStar color="#EDAB00" />
              <AiFillStar color="#EDAB00" />
              <AiFillStar color="#EDAB00" />
              <AiFillStar color="#EDAB00" />
            </div>
            <p className="p-2 text-sm">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
