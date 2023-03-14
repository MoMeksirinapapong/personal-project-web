import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Patone from "../assets/patone.png";
import Pattwo from "../assets/pattwo.png";
import Patthree from "../assets/patthree.png";
import Patfour from "../assets/patfour.png";
import Color from "../assets/color.png";

import Dark from "../assets/dark.jpg";
import { Link } from "react-router-dom";

export default function PatientPage() {
  return (
    <div className="z-0">
      <img className="w-[390px] h-[845px] z-0" src={Dark} alt="" />
      <div className="flex space-x-14 static">
        <Link to="/table/4">
          <button className="hover:animate-pulse absolute top-32 w-[140px] ml-12 z-10">
            {/* <div className="absolute top-32 w-[140px] ml-12 z-10"> */}
            <img className="-ml-2" src={Patfour} alt="" />
            <div className="absolute font-serif top-14 text-white ml-32 w-[200px]">
              Shrimp Omlete with Veggies
            </div>
            {/* </div> */}
          </button>
        </Link>
      </div>
      <div className="absolute w-[310px] top-0 transform -scale-x-100 opacity-70 z-0 w-[300px]">
        <img
          className="absolute right-8 -mt-8 rotate-90 z-0"
          src={Color}
          alt=""
        />
      </div>
      <div className="absolute top-64 mt-10 ml-12 w-[150px] z-10">
        <Link to="/table/5">
          <button className="hover:animate-pulse">
            <img className="-ml-2" src={Patone} alt="" />
            <div className="absolute font-serif top-14 text-white ml-36 w-[150px]">
              Salmon Teriyaki with Veggies
            </div>
          </button>
        </Link>
      </div>

      <div className="absolute top-96 mt-20 ml-10 w-[150px]">
        <Link to="/table/6">
          <button className="hover:animate-pulse">
            <img src={Pattwo} alt="" />
            <div className="absolute font-serif bottom-16 ml-36 text-white w-[180px]">
              Salmon Grill with Rice and Veggie
            </div>
          </button>
        </Link>
      </div>

      <div>
        <Link to="/table/7">
          <button className="hover:animate-pulse">
            <img
              className="absolute top-96 mt-64 ml-10 w-[145px]"
              src={Patthree}
              alt=""
            />
            <div className="absolute text-white font-serif ml-52  bottom-2 w-[150px]">
              Stream Fish with Pea and Lettuce
            </div>
          </button>
        </Link>
      </div>

      <div className="absolute top-5 ml-5 text-white opacity-80 z- hover:text-gray-500">
        <Link to="/target">
          <ArrowBackIcon color="white" fontSize="large" />
        </Link>
      </div>
      <div className="font-serif text-[30px] text-white absolute top-0 mt-20 ml-24 z-10">
        Patient's Food
      </div>
    </div>
  );
}
