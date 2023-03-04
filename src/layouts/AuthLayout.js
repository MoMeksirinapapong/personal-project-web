// import { Outlet } from "react-router-dom";
// import logo1 from "../assets/logo1.jpg";
// import { Link } from "react-router-dom";
// import bg from "../assets/bg.jpeg";

// export default function AuthLayout() {
//   return (
//     <>
//       <div className="w-full min-h-[844px] bg-white mx-auto border  ">
//         <img src={bg} alt="" />
//         <div className="flex space-4">
//           <div className="w-32 ">
//             <img class="" src={logo1} alt="" />
//           </div>
//           <div className="">
//             <Link to="/">
//               <button className=" hover:bg-gray-400 hover:animate-bounce text-black font-bold py-4 px-5 font-serif text-3xl flex ml-40 ">
//                 HOME
//               </button>
//             </Link>
//           </div>
//           <div>
//             <Link to="/tatger">
//               <button className=" hover:bg-gray-400 hover:animate-bounce text-black font-bold py-4 px-5 font-serif text-3xl flex ml-40">
//                 TARGET
//               </button>
//             </Link>
//           </div>
//           <div>
//             <Link to="/about">
//               <button className=" hover:bg-gray-400 hover:animate-bounce text-black font-bold py-4 px-5 font-serif text-3xl flex ml-40 mr-20">
//                 ABOUT
//               </button>
//             </Link>
//           </div>
//           <div className=" flex space-x-4 py-1 mt-3 mb-5">
//             <div className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-8 rounded-full  flex justify-items-center">
//               <button>Login</button>
//             </div>
//             <div className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-8 rounded-full flex justify-items-center">
//               <button>Register</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Outlet />
//     </>
//   );
// }

import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="w-[390px] h-[845px] border flex justify items-center">
      <Outlet />
    </div>
  );
}
