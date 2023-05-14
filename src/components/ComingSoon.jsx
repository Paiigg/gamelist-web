import React from "react";
import soon1 from "../assets/soon1.svg";
import soon2 from "../assets/soon2.svg";
import soon3 from "../assets/soon3.svg";
import soon4 from "../assets/soon4.svg";
import soon5 from "../assets/soon5.svg";

export default function ComingSoon() {
  return (
    <div className="bg-[#0E0E0E] text-white pb-10">
      <div className="max-w-[1240px] mx-auto">
        <h3 className="text-2xl font-bold p-4 text-center md:text-left">
          Coming soon
        </h3>
        <div className="flex md:justify-around justify-center flex-col md:flex-row items-center">
          <div className="space-y-4">
            <div className="relative">
              <img
                src={soon1}
                alt=""
                className="w-[400px] md:w-[100%] p-4 md:p-0"
              />
              <div className="absolute bottom-7 left-7 space-y-5 ">
                <p className="text-3xl w-[400px] font-semibold ">
                  Call of Duty®: Modern Warfare® II
                </p>
                <button className="border border-white px-4 rounded-md py-2 hover:bg-primary hover:border-primary ease-in duration-500">
                  Pre-order now!
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={soon2}
                alt=""
                className="w-[400px] md:w-[100%] p-4 md:p-0"
              />
              <div className="absolute bottom-7 left-7 space-y-5 ">
                <p className="text-3xl w-[400px] font-semibold">
                  Call of Duty®: Modern Warfare® II
                </p>
                <button className="border border-white px-4 rounded-md py-2  hover:bg-primary hover:border-primary ease-in duration-500">
                  Pre-order now!
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <img
                src={soon3}
                alt=""
                className="w-[400px] md:w-[100%] p-4 md:p-0"
              />
              <div className="absolute bottom-7 left-7 space-y-5 ">
                <p className="text-3xl w-[200px] font-semibold">
                  EA SPORTS™ FIFA 23
                </p>
                <button className="border border-white px-4 rounded-md py-2  hover:bg-primary hover:border-primary ease-in duration-500">
                  Pre-order now!
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={soon4}
                alt=""
                className="w-[400px] md:w-[100%] p-4 md:p-0"
              />
              <div className="absolute bottom-7 left-7 space-y-5 ">
                <p className="text-3xl w-[300px] font-semibold">
                  Resident Evil 4 - Remake
                </p>
                <button className="border border-white px-4 rounded-md py-2  hover:bg-primary hover:border-primary ease-in duration-500">
                  Pre-order now!
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={soon5}
                alt=""
                className="w-[400px] md:w-[100%] p-4 md:p-0"
              />
              <div className="absolute bottom-7 left-7 space-y-5 ">
                <p className="text-3xl w-[300px] font-semibold ">
                  ALIEN - Dark Descent
                </p>
                <button className="border border-white px-4 rounded-md py-2  hover:bg-primary hover:border-primary ease-in duration-500">
                  Pre-order now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
