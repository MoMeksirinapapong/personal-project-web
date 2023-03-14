import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Friedrice from "../assets/friedrice.png";
import Sand from "../assets/sand.png";
import Lunchbox from "../assets/lunchbox.png";
import Nood from "../assets/nood.png";
import Wood from "../assets/wood.png";
import Brown from "../assets/brown.png";

import Dark from "../assets/dark.jpg";
import { Link } from "react-router-dom";

export default function ChildrentPage() {
  return (
    <div className="z-0">
      <img className="w-[390px] h-[845px] z-0" src={Dark} alt="" />
      <div className="flex space-x-14 static z-10">
        <Link to="/table/1">
          <button className="hover:animate-pulse z-10">
            <div className="absolute top-32 w-[150px] ml-10">
              <img className="-ml-2" src={Friedrice} alt="" />
              <div className="absolute font-serif top-14 text-white ml-36 w-[200px] z-10">
                Friedrice with chicken
              </div>
            </div>
          </button>
        </Link>
      </div>

      <div className="absolute top-64 mt-14 ml-12 w-[150px] z-10">
        <Link to="/table/2">
          <button className="hover:animate-pulse">
            <img className="-ml-2" src={Lunchbox} alt="" />
            <div className="absolute font-serif top-14 text-white ml-40 w-[170px]">
              Bake egg with bread and snack
            </div>
          </button>
        </Link>
      </div>

      <div className="absolute top-96 mt-16 ml-10 w-[150px] z-10">
        <Link to="/table/3">
          <button className="hover:animate-pulse">
            <img src={Sand} alt="" />
            <div className="absolute font-serif bottom-20 left-48  text-white z-20">
              Sandwich
            </div>
          </button>
        </Link>
      </div>

      {/* <div> */}
      <Link to="/table/12">
        <button>
          <img
            className="absolute top-96 mt-48 ml-8 w-[180px] z-10 hover:animate-pulse"
            src={Nood}
            alt=""
          />
          <div className="absolute text-white font-serif ml-56  bottom-2 z-10">
            Pork Noodle
          </div>
        </button>
      </Link>
      {/* </div> */}

      <div className="absolute top-5 ml-5 text-white opacity-80 z- hover:text-gray-500">
        <Link to="/target">
          <ArrowBackIcon color="white" fontSize="large" />
        </Link>
      </div>

      <div className="font-serif text-[30px] text-white absolute top-0 mt-20 ml-24 z-10">
        Children's Food
      </div>
      {/* <div className="absolute  w-[275px] top-0 ml-28 rotate-180 transform -scale-x-100 mt-0.5 opacity-70 z-0"> */}
      <img
        className="z-0 absolute  w-[275px] top-0 ml-28 rotate-180 transform -scale-x-100 mt-0.5 opacity-70 z-0"
        src={Wood}
        alt=""
      />
      {/* </div> */}
      {/* <div className="absolute w-[250px] -bottom-28  transform -scale-x-100 opacity-50 z-0"> */}
      <img
        className="z-0 absolute w-[250px] -bottom-28  transform -scale-x-100 opacity-50 "
        src={Brown}
        alt=""
      />
      {/* </div> */}
    </div>
  );
}
