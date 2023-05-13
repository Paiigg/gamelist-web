import React from "react";
import best1 from "../assets/best1.svg";
import best2 from "../assets/best2.svg";
import best3 from "../assets/best3.svg";
import best4 from "../assets/best4.svg";

const GameList = () => {
  return (
    <div className=" max-w-[1240px] mx-auto">
      <h3 className="p-4 text-2xl font-bold text-center md:text-left">
        Best seller games
      </h3>
      <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
        <div className="p-4 bg-white shadow-xl rounded-xl">
          <img src={best1} alt="" />
          <div className="mt-4">
            <p className="text-lg font-semibold">Minecraft</p>
            <p className="text-sm text-primary">Rp 260.000</p>
          </div>
        </div>
        <div className="p-4 bg-white shadow-xl rounded-xl">
          <img src={best2} alt="" />
          <div className="mt-4">
            <p className="text-lg font-semibold">Ashpalt 9:Legends</p>
            <p className="text-sm text-primary">Rp 260.000</p>
          </div>
        </div>
        <div className="p-4 bg-white shadow-xl rounded-xl">
          <img src={best3} alt="" />
          <div className="mt-4">
            <p className="text-lg font-semibold">The Witcher 3</p>
            <p className="text-sm text-primary">Rp 260.000</p>
          </div>
        </div>
        <div className="p-4 bg-white shadow-xl rounded-xl">
          <img src={best4} alt="" />
          <div className="mt-4">
            <p className="text-lg font-semibold">Surving Mars</p>
            <p className="text-sm text-primary">Rp 260.000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameList;
