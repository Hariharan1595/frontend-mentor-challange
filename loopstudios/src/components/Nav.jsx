import React, { useEffect, useState } from "react";
import { close, logo, menu } from "../assets/images";
import { navMenu } from "../constant";

const Nav = () => {
  const [active, setActive] = useState("About");
  const [isOpen, setIsOpen] = useState("false");
  const [navColor, setNavColor] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setNavColor(true) : setNavColor(false);
    });
  }, []);

  return (
    <header
      className={`flex z-50 justify-between items-center w-full lg:px-20 p-10 lg:py-10 fixed ${
        navColor ? "bg-black " : ""
      } `}
    >
      <img src={logo} alt="logo"  />
      <nav
        className={`z-10 lg:flex hidden gap-10 items-center text-white list-none font-alata font-[400] cursor-
      ${isOpen ? "" : "max-sm:block fixed bg-black inset-0 overflow-hidden"}  `}
      >
        {navMenu.map((link, i) => (
          <li
            className={`relative cursor-pointer ${
              active === link.label ? "active-state" : ""
            } ${isOpen ? "" : "text-center w-10 ml-10 mt-10 "}`}
            onClick={() => setActive(link.label)}
            key={i}
          >
            {link.label}
          </li>
        ))}
      </nav>
      <img
        src={isOpen ? menu : close}
        alt="menu"
        onClick={() => setIsOpen((prev) => !prev)}
        className="lg:hidden z-10"
      />
    </header>
  );
};

export default Nav;
