import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Card({ data }) {
  const slideLeft = () => {
    var slider2 = document.getElementById("slider2");
    slider2.scrollLeft = slider2.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider2 = document.getElementById("slider2");
    slider2.scrollLeft = slider2.scrollLeft + 500;
  };

  return (
    <div className=" flex items-center relative">
      <BiChevronLeft
        size={40}
        color="#3B44F6"
        className="opacity-50 hover:opacity-100"
        onClick={slideLeft}
      />
      <div
        id="slider2"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {data?.map((data) => (
          <div className="bg-white shadow-xl p-4 rounded-xl mb-4 relative inline-block mr-4">
            <img
              src={data.background_image}
              alt=""
              className="w-[230px] h-[220px] inline-block"
            />
            <div className="mt-4">
              <p className="font-semibold text-lg">{data.name}</p>
              <p className="text-primary text-sm">Rp 260.000</p>
            </div>
          </div>
        ))}
      </div>
      <BiChevronRight
        size={40}
        color="#3B44F6"
        className="opacity-50 hover:opacity-100"
        onClick={slideRight}
      />
    </div>
  );
}
