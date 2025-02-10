import React from "react";

const HeaderContentPage = (props) => {
  const { headerText, icon } = props;

  return (
    <div className="lg:flex md:flex md:items-center md:justify-center md:p-[10.5] sm:block  sm:items-center sm:p-12 sm:justify-center  items-center justify-center p-11 border-b border-dashed border-b-yellow-500">
      <h2 className="leading-[1rem] mt-10 text-[36px] sm:mb-10 font-bold tracking-[1.5px] uppercase text-yellow-500 flex flex-grow">
        {headerText}
      </h2>
      <span className="lg:mt-10 mt-20">{icon}</span>
    </div>
  );
};

export default HeaderContentPage;
