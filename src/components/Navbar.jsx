import React from "react";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={
        colorChange
          ? "fixed z-20 w-full bg-white m-auto py-4 px-4 shadow-lg"
          : "fixed z-20 w-full bg-transparent  m-auto py-4 px-4"
      }
    >
      <div className="flex items-center justify-between ">
        <div>
          <a
            href="/"
            className={
              colorChange
                ? "text-primary font-bold text-xl"
                : "text-white font-bold text-xl"
            }
          >
            <span className="text-primary">kinG</span>Store
          </a>
        </div>
        <div className={colorChange ? "text-primary " : "text-white "}>
          <ul className="hidden gap-4 md:flex ">
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">Browse Games</a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
          </ul>
        </div>
        <div className="hidden gap-4 text-white md:flex">
          <button className="px-4 py-2 rounded-md bg-primary">Sign Up</button>
          <button
            className={
              colorChange
                ? "border border-primary rounded-md text-primary px-4 py-2"
                : "border border-white rounded-md px-4 py-2"
            }
          >
            Sign In
          </button>
        </div>
        <div className="md:hidden" onClick={handleNav}>
          {nav ? (
            <BiX size={30} color="#3B44F6" />
          ) : (
            <BiMenu size={30} color="#3B44F6" />
          )}
        </div>
        <div
          className={
            nav
              ? "absolute top-[70px] right-[40px] bg-black text-white shadow-lg p-4 ease-in duration-500 "
              : "absolute top-[70px] right-[-100%]"
          }
        >
          <ul className="flex flex-col gap-4 text-center md:hidden ">
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">Browse Games</a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            <button className="py-2 rounded-md bg-primary">Sign Up</button>
            <button className="py-2 border border-white rounded-md ">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
