import React, { useState } from "react";
import { navLinks } from "../constants";
import { Close, Logo, Menu } from "../assets/icons";

const Navbar = () => {
  const [toggle, setToogle] = useState(false);
  return (
    <header className="w-full flex justify-between items-center  px-6 py-6 fixed z-[10]  bg-blue-400 ">
      <img src={Logo} alt="logo" />
      <nav className="flex gap-10  items-center max-sm:hidden">
        {navLinks.map((links) => (
          <li key={links.id} className="font-Barlow text-xl text-white list-none cursor-pointer">
            <a>{links.title}</a>
          </li>
        ))}
        <button className="font-Fraunces text-white rounded-full border-2 px-4 py-2 ">
          Contant
        </button>
      </nav>
      <div className="sm:hidden">
        <img
          src={toggle ? Close : Menu}
          alt="menu"
          onClick={() => setToogle((prev) => !prev)}
        />
        <div className={`${toggle ? "flex" : "hidden"}`}>
          <nav className="flex gap-5 mx-4 rounded-xl py-5 items-center flex-col absolute top-20 left-0 right-0 max-width-[140px] bg-[orange]">
            {navLinks.map((links) => (
              <li
                key={links.id}
                className="font-Barlow text-xl text-white list-none cursor-pointer"
              >
                <a>{links.title}</a>
              </li>
            ))}
            <button className="font-Fraunces text-white rounded-full border-2 px-4 py-2 ">
              Contant
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
