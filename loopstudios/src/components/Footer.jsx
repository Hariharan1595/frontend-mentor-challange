import React, { useState } from "react";
import { fb, logo } from "../assets/images";
import { navMenu, socialIcon } from "../constant";

const Footer = () => {
  const [active, setActive] = useState("");
  const [iconActive, setIconActive]=useState("")
  return (
    <footer className="w-full bg-black p-10 text-white flex justify-between items-center font-josefinSans max-sm:flex-col max-sm:text-center">
      <div className="flex flex-col">
        <img src={logo} alt="logo" width={180} />
        <ul className="flex lg:gap-10 gap-5 my-5  max-sm:flex-col">
          {navMenu.map((menu, i) => (
            <li
              key={i}
              className={`${
                active === menu.label ? "active-state" : ""
              } cursor-pointer relative m-auto max-sm:w-[30%]`}
              onClick={() => setActive(menu.label)}
            >
              {menu.label}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex justify-between max-sm:w-[70%] m-auto max-sm:my-8">
          {socialIcon.map((icon,i) => (
            <img key={i} src={icon.icons} className={`m-auto cursor-pointer relative  ${iconActive===icon.icons ?'active-state':''}`}onClick={()=>setIconActive(icon.icons)} />
          ))}
        </ul>
        <p className="my-5 text-VeryDarkGray font-josefinSans">
        © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
