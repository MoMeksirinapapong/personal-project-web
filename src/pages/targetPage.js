import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Dark from "../assets/dark.jpg";
import { Link } from "react-router-dom";
import Bear from "../assets/bear.jpeg";
import Pa from "../assets/pa.jpg";
import Steak from "../assets/steak.jpg";
import Wood from "../assets/wood.png";
import Brown from "../assets/brown.png";

export default function TargetPage() {
  return (
    <div>
      <img className="w-[390px] h-[845px] static" src={Dark} alt="" />
      <div className="absolute top-5 ml-5 text-white z-0 hover:text-gray-500">
        <Link to="/">
          <ArrowBackIcon color="white" fontSize="large" />
        </Link>
      </div>
      <div className="font-serif text-[30px] text-white absolute top-0 mt-16 ml-40 z-10 opacity-70">
        Target
      </div>
      <Link to="/childrefoood">
        <button className="">
          <div className="w-[150px] h-auto   text-black absolute top-32 ml-10 z-10 py-3 border rounded-3xl bg-white opacity-80">
            <div className="font-serif text-[20px]">Children</div>
            <div className="z-20 w-[145px] h-auto -mt-2 ml-0.5">
              <img src={Bear} alt="" />
            </div>
          </div>
        </button>
      </Link>
      <Link to="/patient">
        <button>
          <div className="w-[150px] h-auto   text-black absolute top-32 ml-52 z-10 py-4 border-white rounded-3xl bg-white opacity-80 border-2">
            <div className="font-serif text-[20px] -mt-1">Patient</div>
            <div className="z-20 w-[147px] h-auto ">
              <img src={Pa} alt="" />
            </div>
          </div>
        </button>
      </Link>

      <Link to="/people">
        <button>
          <div className="absolute w-[174px] h-[225px] text-black  top-96 border rounded-3xl bg-white opacity-70 ml-28 z-10">
            <div className="font-serif text-[20px] mt-2">Normal People</div>
            <div className="text-[14px] ml-0.5 mr-2 font-serif w-[167px] h-auto">
              <img src={Steak} alt="" />
            </div>
          </div>
        </button>
      </Link>

      <div className="absolute  w-[275px] top-0 ml-28 rotate-180 transform -scale-x-100 mt-0.5 opacity-70">
        <img className="" src={Wood} alt="" />
      </div>
      <div className="absolute w-[320px] -bottom-28">
        <img className="ml-2" src={Brown} alt="" />
      </div>
    </div>
  );
}
