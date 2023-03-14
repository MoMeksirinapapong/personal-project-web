import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Joi from 'joi';
import React, { useState } from "react";
// import styled from "styled-components";
// import AuthContainer from "../Layout/AuthContainer";
import useAuth from "../hooks/useAuth";
import Dark from "../assets/dark.jpg";
import { Outlet } from "react-router-dom";
import Firstdish from "../assets/firstdish.png";
import Wine from "../assets/wine.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await login(email, pass);
      // login success
      toast.success("success login");
      navigate("/");
    } catch (err) {
      // login failed
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };
  return (
    <div className="w-[390px] h-[845px] mx-auto border-white static">
      <div className="absolute top-5 ml-5 text-white opacity-80 z-30 hover:text-gray-500">
        <Link to="/">
          <button>
            <ArrowBackIcon color="white" fontSize="large" />
          </button>
        </Link>
      </div>
      <img className="w-[390px] h-[845px] rounded-3xl " src={Dark} alt="" />

      <div className="space-x-1.5">
        <img
          className="w-[250px] absolute -top-2 z-20"
          src={Firstdish}
          alt=""
        />
        <div className="text-[24px] text-white px-60 mt-1 absolute top-52 z-30 font-serif opacity-80">
          <h1>Login</h1>
        </div>
      </div>
      <div className="w-[280px] h-[300px] text-[16px]  font-serif absolute top-14 center-0 opacity-60 mt-48 z-10 rounded-2xl  border flex justify-center ml-14 ">
        <form className="login-form mt-11" onSubmit={handleSubmit}>
          <div className=" mb-5 z-30 ">
            <label className="text-white ml-2 mr-2 " htmlFor="email">
              Email :
            </label>
            <input
              className=" bg-black opacity-70 w-[180px] text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="a@email"
              id="email"
              name="email"
            />
          </div>
          <div className=" mb-5 ">
            <label className="text-white ml-2 mr-2 " htmlFor="password">
              Password :
            </label>
            <input
              className="bg-black opacity-70 text-white"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
          </div>

          <div className="text-center">
            <button
              className="w-20 bg-white border- text-black rounded hover:bg-gray-500 "
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="text-white underline hover:text-gray-500 text-center mt-20">
            <Link to="/register">Don't have an account? Register!</Link>
          </div>
        </form>
      </div>
      <div className="w-[250px] -mt-96 ml-32  z-0 mr-6">
        <img className="" src={Wine} alt="" />
      </div>

      <Outlet />
    </div>
  );
}
