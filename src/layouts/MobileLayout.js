import { Outlet } from "react-router-dom";

export default function MobileLayout() {
  return (
    <div className="w-[390px] h-[845px] bg-white mx-auto border z-0">
      <Outlet />
    </div>
  );
}
