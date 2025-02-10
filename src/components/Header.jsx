import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
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

  const handleToggleIcon = () =>{
    setToggleIcon(!toggleIcon)
  }

  return (
    <header className="fixed w-full  bg-black flex justify-between items-center p-4 z-50">
      <div className="text-3xl font-extrabold text-red-500 hover:scale-110 transition duration-300">
        <Link to={"/"}>
          <FaReact size={30} />
        </Link>
      </div>
      <ul className="flex ml-8 text-lg font-medium text-amber-400  border-transparent space-x-2 ">{
        data.map ((item, key)=>(
          <li key ={key} className="hidden xl:flex md:flex lg:flex hover:underline hover:text-red-500 ">
          <Link to = {item.to}>{item.label}</Link>
        </li>

        ))}
        
      </ul>
      <div onClick={handleToggleIcon} className="md:hidden text-red-400 ">
        {toggleIcon?<HiX size={30} /> : <FaBars size={30} />}</div>

      
    </header>
  );
};

export default Header;
