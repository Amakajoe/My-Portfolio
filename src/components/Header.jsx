import React, { useState } from "react";
import { FaBars, FaAmilia } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT",
    to: "about",
  },
  {
    label: "SKILLS",
    to: "skills",
  },
  {
    label: "RESUME",
    to: "resume",
  },

  {
    label: "CONTACT",
    to: "contact",
  },
];

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <header className="fixed w-full  bg-black flex justify-between items-center p-4 z-50">
        <div className="text-3xl font-extrabold text-red-500 hover:scale-110 transition duration-300">
          <Link to={"/"} className="cursor-pointer">
          
            <FaAmilia size={40} />
          </Link>
        </div>
        <ul className="flex ml-8 text-lg font-medium text-amber-400  border-transparent space-x-2  ">
          {data.map((item, key) => (
            <li
              key={key}
              className="hidden md:flex md:flex-col md:w-[100%] md:left-[-110%] lg:flex hover:underline hover:text-red-500 "
            >
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={handleToggleIcon}
          className="lg:hidden  text-red-400 cursor-pointer"
        >
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>

        <ul
          className={` fixed top-0 left-0    bg-black  text-white flex flex-col items-center space-y-6 py-6 transition-transform ${
            toggleIcon ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          {data.map((item, key) => (
            <li key={key}>
              <Link to={item.to} onClick={() => setToggleIcon(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Header;
