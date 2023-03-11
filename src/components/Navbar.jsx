import React from "react";
import logo from "../assets/uiurc.png";

const Navbar = () => {
  const menus = ["HOME", "TEAM", "OUR WORK", "OUR REACH", "CONTACT"];
  return (
    <nav className="w-full flex items-center px-12 py-5 top-0 z-20 bg-primary border-b border-black">
      <div className="w-full flex justify-between items-center max-w-7xl px-5">
      <div>
        <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
      </div>
      <div>
        <ul className="list-none hidden sm:flex flex-grow gap-16 font-semibold cursor-pointer">
          {menus.map((menu) => (
            <li className="py-2">{menu}</li>
          ))}
          <button className="bg-black text-white rounded-full px-10 py-2">JOIN US</button>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
