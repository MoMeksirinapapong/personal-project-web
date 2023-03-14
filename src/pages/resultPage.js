import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dark from "../assets/dark.jpg";

export default function ResultPage() {
  const [addNote, setAddnote] = useState("Please input Note");
  const [newNote, setNewnote] = useState("");
  const [update, setUpdate] = useState(false);

  const getUser = async () => {
    const res = await axios.get("http://localhost:8888/auth/user");
    // console.log(res.data);
    setAddnote(res.data.user.note);
  };

  const postNote = async (aaa) => {
    const res = await axios.patch("http://localhost:8888/auth/note", {
      note: aaa,
    });
    // console.log(res.data);
    // setAddnote(res.data.user.note);
  };

  useEffect(() => {
    getUser();
    return () => setUpdate(false);
  }, [update]);

  console.log("addNote", addNote);
  //Add note
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // await setAddnote([...addNote, newNote]);
    // setNewnote("");
    postNote(newNote);
    setUpdate(true);
  };

  function handleChange(e) {
    setNewnote(e.target.value);
  }

  return (
    <div className="">
      <img className=" h-[845px] w-[full]" src={Dark} alt="" />
      <div className="absolute top-5 ml-5 text-white opacity-80 z-10 hover:text-gray-500">
        <Link to="/">
          <ArrowBackIcon color="white" fontSize="large" />
        </Link>
      </div>
      <div className="font-serif text-[30px] text-white absolute top-0 mt-20 ml-44 z-10">
        Note
      </div>
      {/* New Note */}
      <div className="absolute top-36 text-white font-serif text-[18px] ml-20 w-[250px] h-[200px]">
        <ul>
          <p className=" break-words overflow-auto ">{addNote}</p>
        </ul>
        <form onSubmit={handleSubmit}>
          <label className="text-yellow-400" htmlFor="note">
            Leave a note:
          </label>
          <br />
          <textarea
            className="text-black break-words  overflow-auto w-[250px] h-[200px] "
            id="note"
            value={newNote}
            onChange={handleChange}
          />
          <br />
          <button
            className="border hover:bg-gray-200 hover:text-black"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>

          <button
            className="border hover:bg-gray-200 hover:text-black ml-4 "
            type="submit"
            onClick={() => postNote("Please input Note")}
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
