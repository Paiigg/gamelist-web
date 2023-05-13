import React from "react";
import { useEffect, useState } from "react";
import badge1 from "../assets/badge1.svg";
import badge2 from "../assets/badge2.svg";
import badge3 from "../assets/badge3.svg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Genres = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [genres, setGenres] = useState([]);
  const url =
    "https://rawg.io/api/genres?token&key=bbe9f39be8c249a9aad68948d9c060f9";
  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get(url);
      console.log(response.data.results);
      setGenres(response.data.results);
    };
    getGenres();
  }, []);
  return (
    <div className="md:h-screen max-w-[1240px] mx-auto">
      <div className="text-center mt-10">
        <p className="text-3xl font-bold">Why kinGStore?</p>
        <p className="md:w-[500px] mx-auto mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          voluptatibus?
        </p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <img src={badge1} alt="" />
          <p className="w-[200px] text-center">
            Available for all Xbox consoles
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <img src={badge2} alt="" />
          <p className="w-[200px] text-center">Trusted by 100.000+ customers</p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <img src={badge3} alt="" />
          <p className="w-[200px] text-center">5000+ video games available</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mt-20">
          <h3 className="md:text-2xl font-bold p-4">Game Genres</h3>
          <p className="text-primary">See all games</p>
        </div>
        <div className="relative flex items-center">
          <BiChevronLeft
            size={40}
            color="#3B44F6"
            className="opacity-50 hover:opacity-100"
            onClick={slideLeft}
          />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {genres.map((genres) => (
              <div className="relative inline-block">
                <img
                  src={genres.image_background}
                  alt=""
                  className="w-[169px] h-[169px] rounded-xl inline-block cursor-pointer p-2"
                />
                <div className="absolute bg-gradient-to-t from-black to-transparents flex items-center justify-center h-full w-full -bottom-10 group-hover:bottom-0 rounded-md opacity-0 hover:opacity-100 p-4  ease-in duration-500">
                  <button className="   text-white rounded-md  px-2 py-2">
                    {genres.name}
                  </button>
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
      </div>
    </div>
  );
};

export default Genres;
