import React from "react";

const HeaderContentPage = (props) => {
  const { headerText, icon } = props;

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center md:p-[10.5] sm:block  sm:items-center sm:p-12 sm:justify-center  items-center justify-center p-11 border-b border-dashed border-b-yellow-500">
      <h2 className="leading-normal mt-10 text-[36px] sm:mb-10 font-bold tracking-wide uppercase text-yellow-500 flex flex-grow">
        {headerText}
      </h2>
      <span className="mt-4 md:mt-0 md:ml-4">{icon}</span>
    </div>
  );
};

export default HeaderContentPage;
