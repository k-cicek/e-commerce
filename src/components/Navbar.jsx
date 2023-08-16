import React, { useEffect, useState } from "react";
import { BsBasketFill, BsLightbulb, BsMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");
    if (color) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  }, [color]);

  return (
    <div className="flex items-center justify-between px-3 h-28">
      <div>LOGO</div>
      <di className="flex items-center space-x-4">
        <input
          className="border p-3 outline-none rounded-lg"
          type="text"
          placeholder="search"
        />
        <div onClick={() => setColor(!color)}>
          {color ? (
            <BsMoonStarsFill size={25} className="cursor-pointer" />
          ) : (
            <BsLightbulb size={25} className="cursor-pointer" />
          )}
        </div>
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
