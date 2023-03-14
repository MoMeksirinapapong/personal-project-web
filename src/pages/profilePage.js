import { useState, useEffect } from "react";

import Dark from "../assets/dark.jpg";
import Profile from "../assets/profile.png";
import Jjj from "../assets/jjj.png";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useAuth from "../hooks/useAuth";

import * as authApi from "../apis/auth-api";
import { removeAccessToken } from "../util/local-storage";
import axios from "axios";

export default function ProfilePage() {
  const xxx = useAuth();
  // const { authenticatedUser } = useAuth();
  const authenticatedUser = {};

  console.log("------------> ", xxx);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   // fetch user data from API or database
  //   fetch("https://example.com/api/user/profile")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setName(data.name);
  //       setNickname(data.nickname);
  //       setPhone(data.phone);
  //       setAddress(data.address);
  //       setImageUrl(data.imageUrl);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  useEffect(() => {
    const fetchAuthGetMe = async () => {
      try {
        const res = await authApi.getMe();
        // #if token expire it will throw error
        console.log("set userrrrrrrrrrr");
        console.log(res.data.user);
        setName(res.data.user.fullname);
        setEmail(res.data.user.email);
      } catch (err) {
        removeAccessToken();
      }
    };
    fetchAuthGetMe();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //   const handleImageChange = (event) => {
  //     setImageUrl(event.target.value);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send updated profile data to API or database
    fetch("https://example.com/api/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  const handleClick = async () => {
    await authApi.updateUser({ fullname: name, email: email });
  };

  return (
    <div className="static">
      <div className="absolute top-5 ml-5 text-white opacity-80 z- hover:text-gray-500">
        <Link to="/">
          <ArrowBackIcon color="white" fontSize="large" />
        </Link>
      </div>
      <img className="w-[390px] h-[845px] z-0" src={Dark} alt="" />
      <div className="absolute top-64 z-0 w-[388px] opacity-40">
        <img src={Jjj} alt="" />
      </div>
      <div>
        <img
          className="w-[120px] absolute z-0 top-24 ml-36 border rounded-full"
          src={Profile}
        />
      </div>
      <div>{authenticatedUser?.fullname}</div>
      <div className="-ml-2 z-10">
        <div className="absolute top-64 text-white font-serif text-[18px] ml-20">
          Full Name:{" "}
          <input
            className="text-black"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>{" "}
        <div className="absolute top-64 mt-16 ml-20 font-serif text-[18px] text-white">
          Email:
          <input
            type="text"
            className="text-black"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button
          onClick={handleClick}
          className="absolute top-80 mt-32 ml-44 text-white font-serif text-[18px] border px-4 hover:bg-white hover:text-black"
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  );
}
