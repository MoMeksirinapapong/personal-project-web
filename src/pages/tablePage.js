import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Friedrice from "../assets/friedrice.png";
import Lunchbox from "../assets/lunchbox.png";
import * as foodApi from "../apis/food-api";
import Sand from "../assets/sand.png";
import Nood from "../assets/nood.png";
import Patone from "../assets/patone.png";
import Pattwo from "../assets/pattwo.png";
import Patthree from "../assets/patthree.png";
import Patfour from "../assets/patfour.png";
import Norone from "../assets/norone.png";
import Nortwo from "../assets/nortwo.png";
import Northree from "../assets/northree.png";
import Norfour from "../assets/norfour.png";
import Dark from "../assets/dark.jpg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [ingredient, setIngredient] = useState([]);
  const [totoPrice, setTotoPrice] = useState(0);
  const [people, setPeople] = useState(1);
  const [value, setValue] = useState(1);
  let picture;
  // console.log(people);

  const { foodId } = useParams();
  //Children'sFood
  if (+foodId === 1) {
    picture = Friedrice;
  } else if (+foodId === 2) {
    picture = Lunchbox;
  } else if (+foodId === 3) {
    picture = Sand;

    //Pateint's Food
  } else if (+foodId === 4) {
    picture = Patfour;
  } else if (+foodId === 5) {
    picture = Patone;
  } else if (+foodId === 6) {
    picture = Pattwo;
  } else if (+foodId === 7) {
    picture = Patthree;

    //Adult's Food
  } else if (+foodId === 8) {
    picture = Norone;
  } else if (+foodId === 9) {
    picture = Nortwo;
  } else if (+foodId === 10) {
    picture = Northree;
  } else if (+foodId === 11) {
    picture = Norfour;
  } else if (+foodId === 12) {
    //Pork Noodle
    picture = Nood;
  }

  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
  };
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  // console.log(foodId);
  let table;
  useEffect(() => {
    const fetchData = async () => {
      const table = await foodApi.getTable(foodId);
      setIngredient(table.data.table);
      console.log("why curv -----> ", table.data.table);
    };
    fetchData();
  }, []);
  console.log("xxx", totoPrice);
  useEffect(() => {
    const totalPrice = () => {
      const res = ingredient.reduce((acc, el) => {
        acc += +el.price;
        console.log(acc);
        return acc;
      }, 0);
      setTotoPrice(res);
      console.log(res);
    };
    totalPrice();
  }, [ingredient]);

  return (
    <div>
      <div className="absolute top-5 ml-5 text-white opacity-80 z- hover:text-gray-500">
        <Link to="/childrefoood">
          <button>
            <ArrowBackIcon color="white" fontSize="large" />
          </button>
        </Link>
      </div>
      <img className="w-[390px] h-[845px] static" src={Dark} alt="" />
      <div className="font-serif text-[30px] text-white absolute top-0 mt-20 ml-12 z-10 ">
        Menu
      </div>
      <div>
        <img
          className="absolute top-32 ml-16 w-[250px] "
          src={picture}
          alt=""
        />
        <div className="absolute top-96 text-white text-center">
          <table className="border justify-center ml-4 ">
            <tr>
              <th className="border py-2 px-4">Ingredient</th>
              <th className="border py-2 px-1">Value/g.</th>
              <th className="border py-2 px-1">Price/Baht</th>
              <th className="border py-2 px-1">Nutrient</th>
            </tr>
            {ingredient.map((el) => (
              <tr className="border">
                <td className="border">{el.title}</td>
                <td className="border">{el.value}</td>
                <td className="border">{el.price}</td>
                <td className="border">{el.nutrient}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="absolute bottom-28 text-white ml-24 font-serif text-[16px] text-center">
        Number of people:
        <input
          className="text-black w-[100px] text-center"
          type="text"
          value={people}
          onChange={handlePeopleChange}
        />
      </div>
      <div className="absolute bottom-16 text-white ml-24 font-serif text-[20px] text-center">
        Total Price : {totoPrice * people} Baht/dish
      </div>
    </div>
  );
}
