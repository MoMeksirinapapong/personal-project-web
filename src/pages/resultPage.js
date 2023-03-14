import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dark from "../assets/dark.jpg";

export default function ResultPage() {
  const [addNote, setAddnote] = useState([]);
  const [newNote, setNewnote] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setAddnote([...addNote, newNote]);
    setNewnote("");
  }

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
      <div className="font-serif text-[30px] text-white absolute top-0 mt-20 ml-52 z-10">
        Note
      </div>

      <div className="absolute top-36 text-white font-serif text-[18px] ml-24 ">
        <ul>
          {addNote.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <label className="text-yellow-400" htmlFor="note">
            Leave a note:
          </label>
          <br />
          <textarea
            className="text-black"
            id="note"
            value={newNote}
            onChange={handleChange}
          />
          <br />
          <button
            className="border hover:bg-gray-200 hover:text-black"
            type="submit"
          >
            Submit
          </button>
          <button
            className="border hover:bg-gray-200 hover:text-black ml-4"
            type="submit"
          >
            Edit
          </button>
          <button
            className="border hover:bg-gray-200 hover:text-black ml-4"
            type="submit"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
