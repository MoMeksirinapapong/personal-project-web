import Dark from "../assets/dark.jpeg";

export default function AboutPage() {
  return (
    <div>
      <img className="w-[390px] h-[845px] static" src={Dark} alt="" />

      <div className="-mt-20 text-center object-center">
        <p className="text-[14px] text-white font-serif absolute -mt-80 border w-[280px] h-[300px] ">
          “Everyone deserves to have access to healthy and nutritious food ”
          -The WHO. This website was created by Supaporn Makesirinapapong which
          is the person who believe that everyone should deserves good food in
          every stage of their life. And also this website will reduce the
          corruption especially in school. To help children to receive what they
          should get. Therefore it will help you to control cost, reduce wasted
          food, control nutrient and easy for planning the meal.
        </p>
      </div>
    </div>
  );
}
