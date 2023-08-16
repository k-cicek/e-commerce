import React from "react";
import { BsBasketFill, BsLightbulb } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-3 h-28">
      <div>LOGO</div>
      <di className="flex items-center space-x-4">
        <input
          className="border p-3 outline-none rounded-lg"
          type="text"
          placeholder="search"
        />
        <BsLightbulb size={25} className="cursor-pointer" />
        <div className="relative">
          <BsBasketFill size={25} className="cursor-pointer" />
          <div className="absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm">
            3
          </div>
        </div>
      </di>
    </div>
  );
};

export default Navbar;
