import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Norone from "../assets/norone.png";
import Nortwo from "../assets/nortwo.png";
import Northree from "../assets/northree.png";
import Norfour from "../assets/norfour.png";
import Tomato from "../assets/tomato.png";

import Dark from "../assets/dark.jpg";
import { Link } from "react-router-dom";

export default function PeoplePage() {
  return (
    <div className="z-0">
      <img className="w-[390px] h-[845px] z-0" src={Dark} alt="" />
      <div className="flex space-x-14 static z-10">
        <Link to="/table/8">
          <button className="hover:animate-pulse z-10 ">
            <div className="absolute top-32 w-[140px] ml-12 mt-4 z-10">
              <img className="-ml-2 z-10" src={Norone} alt="" />
              <div className="absolute font-serif top-14 text-white ml-32 w-[200px]">
                Grilled Chicken with Salad
              </div>
            </div>
          </button>
        </Link>
      </div>

      <div className="absolute -bottom-16 w-[388px] mt-1 opacity-80 z-0 rotate-180 ">
        <img src={Tomato} alt="" />
      </div>

      {/* <div className="absolute top-64 mt-16 ml-12 w-[135px]"> */}
      <Link to="/table/9">
        <button className="hover:animate-pulse absolute top-64 mt-16 ml-12 w-[135px]">
          <img className="-ml-2" src={Nortwo} alt="" />
          <div className="absolute font-serif top-14 text-white ml-36 w-[150px]">
            Beef steak with Veggies Grilled
          </div>
        </button>
      </Link>
      {/* </div> */}

      {/* <div className="absolute top-96 mt-16 ml-10 w-[145px]"> */}
      <Link to="/table/10">
        <button className="hover:animate-pulse absolute top-96 mt-16 ml-10 w-[145px]">
          <img src={Northree} alt="" />
          <div className="absolute font-serif bottom-16 ml-36 text-white w-[180px]">
            Chicken Salad Wrap
          </div>
        </button>
      </Link>
      {/* </div> */}

      {/* <div> */}
      <Link to="/table/11">
        <button className="hover:animate-pulse z-10">
          <img
            className="absolute top-96 mt-48 ml-8 w-[165px] z-10"
            src={Norfour}
            alt=""
          />
          <div className="absolute text-white font-serif ml-52  -bottom-4  w-[150px] z-10">
            Sandwich Bacon Egg{" "}
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
        Adult's Food
      </div>
    </div>
  );
}
