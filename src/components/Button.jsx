import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const handleNavigateToContactMe = () => {
    navigate("/Contact");
  };

  return (
    <div>
      <button
        onClick={handleNavigateToContactMe}
        className="cursor-pointer py-2 mt-4 px-4 text-2xl border-2 border-yellow-500 rounded-full  bg-black text-red-500 font-semi-bold hover:bg-amber-400 hover:text-white transition hover:shadow-[0_0_15px_3px_rgba(225,0,0,0.8)]"
      >
        Hire me
      </button>
    </div>
  );
};

export default Button;
