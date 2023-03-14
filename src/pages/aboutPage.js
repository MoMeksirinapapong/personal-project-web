import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Dark from "../assets/dark.jpg";
import Spi from "../assets/spi.png";
import Whoo from "../assets/Whoo.png";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div>
      <img className="w-[390px] h-[845px] static" src={Dark} alt="" />
      <div className="absolute top-5 ml-5 text-white opacity-80 z-10 hover:text-gray-500">
        <Link to="/">
          <ArrowBackIcon color="white" fontSize="large" />
        </Link>
      </div>
      <div className="font-serif text-[30px] text-white absolute top-0 mt-20 ml-52 z-10">
        About
      </div>

      <div className="-mt-20 text-center object-center absolute top-0 mt-32 z-10">
        <p className="text-[14px] ml-14 text-white font-serif absolute -mt-30 py-4 ml-36 rounded-2xl w-[200px] h-[300px] opacity-80">
          “Everyone deserves to have access to healthy and nutritious food ”
          -The WHO. This website was created by Supaporn Makesirinapapong which
          is the person who believe that everyone should deserves good food in
          every stage of their life. And also this website will reduce the
          corruption especially in school. To help children to receive what they
          should get. Therefore it will help you to control cost, reduce wasted
          food, control nutrient and easy for planning the meal.
        </p>
      </div>
      <div className="w-[300px] absolute top-0 ">
        <img className="" src={Spi} alt="" />
      </div>
      <div className="w-[210px] absolute -mt-48 -py-20 ml-44 rotate-180">
        <img className="absolute -mt-48" src={Spi} alt="" />
      </div>
      <div className="w-[250px] absolute top-0 mt-96 py-44 ml-10">
        <img className="" src={Whoo} alt="" />
      </div>
    </div>
  );
}
