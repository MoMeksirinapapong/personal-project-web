import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Navigate, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import React, { useState } from "react";
// import styled  from 'styled-components';
import Input from "../components/Input";
import validateRegister from "../validators/validate-register";
import * as authApi from "../apis/auth-api";
import MobileLayout from "../layouts/MobileLayout";
import Dark from "../assets/dark.jpg";
import Olive from "../assets/olive.png";
import Tubb from "../assets/tubb.png";

const initialInput = {
  fullname: "",
  email: "",
  password: "",
  conpass: "",
};
<registerSchema />;
export default function RegisterPage() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const [complete, setComplete] = useState(false);
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      console.log(input);

      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        console.log("no error");
        setError({});
        await authApi.register(input);
        console.log(input);
        setInput(initialInput);
        setComplete(true);
        toast.success("Registeration Success!");
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };
  console.log(input);

  return (
    <>
      <div className="w-[390px] h-[845px] border rounded-3xl static ">
        <img className="w-[390px] h-[845px]" src={Dark} alt="" />
        <div className="absolute top-5 ml-5 text-white opacity-80">
          <Link to="/">
            <ArrowBackIcon color="white" fontSize="large" />
          </Link>
        </div>
        <div className="w-[250px] absolute top-0 ml-36 -mt-16 -rotate-12">
          <img src={Olive} alt="" />
        </div>
        {!complete || <Navigate to="/login" />}
        <div className="text-[24px] font-serif absolute top-0 text-white mt-40 ml-20 py-5 opacity-70 text-white">
          {" "}
          Register
        </div>
        <div className="w-[300px] h-[510px] absolute top-10 text-center mt-44 border rounded-3xl ml-10 opacity-70 font-serif z-10">
          <form
            className="register-form text-black"
            onSubmit={handleSubmitForm}
          >
            <div className="mt-5 mr-24 mb-2 text-white">
              <label htmlFor="name">Full name :</label>
            </div>
            <div className="text-black">
              <Input
                placeholder="Enter fullname"
                name="fullname"
                value={input.fullname}
                onChange={handleChangeInput}
                error={error.fullname}
              />
            </div>
            <div className="mt-4 text-white">
              <label className=" mr-32 mb-2" htmlFor="email">
                Email :
              </label>
            </div>
            <div>
              <Input
                placeholder="Enter email"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
                error={error.email}
              />
            </div>
            <div className="mt-4 mr-24 text-white">
              <label className="mb-2" htmlFor="password">
                <p>Password :</p>
              </label>
            </div>
            <div>
              {" "}
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={input.password}
                onChange={handleChangeInput}
                error={error.password}
              />
            </div>
            <div className="mr-4 mt-5 text-white">
              <label className="mb-2 " htmlFor="password">
                Confirmed Password :
              </label>
            </div>
            <Input
              type="password"
              placeholder="Confirmed password"
              value={input.conpass}
              onChange={handleChangeInput}
              error={error.conpass}
              name="conpass"
            />
            <br></br>

            <button
              className="border rounded w-[100px] mt-8 hover:bg-gray-500 text-white"
              type="submit"
            >
              Register
            </button>
            <div className="mt-5 underline hover:text-gray-500 text-white">
              <Link to="/login">Already have an account?Login!</Link>
            </div>
          </form>
        </div>

        <div className="absolute -mt-32 ml-2">
          <img
            className="w-[250px] h-[280px] -mt-44 rotate-12 z-0"
            src={Tubb}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
