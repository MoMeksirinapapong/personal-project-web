import DescriptionIcon from "@mui/icons-material/Description";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Foodhome from "../assets/foodhome.png";
import Foodhomee from "../assets/foodhomee.png";
import Dark from "../assets/dark.jpg";
import Pann from "../assets/pann.png";
import Basil from "../assets/basil.png";
import Wood from "../assets/wood.png";
import { getAccessToken, removeAccessToken } from "../util/local-storage";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="static w-[390px] h-[845px] ">
      <div className="absolute w-[240px] top-0 rotate-90 transform -scale-x-100 ml-2 opacity-60">
        <img className="-mt-44" src={Wood} alt="" />
      </div>
      <div className="w-[390px] h-[36px] absolute top-0 bg-white opacity-30 mt-4 z-0"></div>
      <img className=" h-[845px]" src={Dark} alt="" />

      {!getAccessToken() ? (
        <div>
          <div>
            <Link to="/register">
              <button class="text-serif absolute top-4 ml-48 bg-black border hover:bg-gray-600 text-white font-bold py-1 px-4 rounded-full">
                Register
              </button>
            </Link>
          </div>
          <div className="ml-2">
            <Link to="/login">
              <button class="absolute top-4 ml-72 bg-black border hover:bg-gray-600 text-white font-bold py-1 px-4 rounded-full">
                Login
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="ml-2">
          <button
            class="absolute top-4 ml-72 bg-black border hover:bg-gray-600 text-white font-bold py-1 px-4 rounded-full"
            onClick={() => {
              removeAccessToken();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      )}

      <button className="absolute top-16 ml-72 text-white">
        <Link to="/result">
          <DescriptionIcon />
          Note
        </Link>
      </button>

      <div className="mt-14">
        <div className="w-[180px] absolute top-1 0  z-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <img src={Foodhome} alt="" />
        </div>
        <div className="w-[150px] absolute top-1 mt-32  ml-52 z-10 top-24 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <img className="" src={Foodhomee} alt="" />
        </div>
        <div className="w-[120px] absolute top-96 z-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 top-32">
          <img className="mt-16 ml-8" src={Pann} alt="" />
        </div>
        <div className="w-[60px] absolute top-32 mt-56 rotate-45 ml-14 mr-6 ">
          <img className="" src={Basil} alt="" />
        </div>

        <div className="absolute top-16 border bg-white opacity-40  rounded text-white z-0 px-24 py-4 z-0 left-42 top-44 ml-20 mr-6 opacity-20 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <Link to="/profile">
            <button className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-black ">
              PROFILE
            </button>
          </Link>
        </div>

        <div className="absolute top-16 border rounded text-white z-0 px-14 py-4 z-0 left-42 mt-44 top-40 ml-20 mr-6 top-30 bg-white opacity-40  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <Link to="/target">
            <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-black">
              TARGET
            </button>
          </Link>
        </div>

        <div className="absolute top-16 border rounded text-white z-0 px-24 py-4 z-0 left-42 mt-80 top-40 ml-20 mr-6 opacity-40 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 bg-white opacity-40">
          <Link to="/about">
            <button className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-black">
              ABOUT
            </button>
          </Link>
        </div>

        <div className="text-[22px] absolute -mt-96 ">
          <p className="mt-24 ml-10 px-4 text-white text-serif">
            “ A HEALTHY OUTSIDE
          </p>
        </div>

        <div className="text-[22px] absolute -mt-96 ">
          <p className="mt-36 ml-24 px-4 text-white text-serif">
            STARTS FROM INSIDE ”
          </p>
        </div>

        <div className="text-[18px] absolute -mt-96 z-10">
          <p className="text mt-48 ml-16 text-white">- Robert Urich</p>
        </div>
        <div className="w-[300px] absolute top-80 mt-64 ml-42 px-2 rotate-270 z-0 opacity-60 ">
          {/* <img className="mt-44 ml-14" src={Prikk} alt="" /> */}
        </div>
      </div>
    </div>
  );
}
