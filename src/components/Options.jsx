import React from "react";

const Options = () => {
  return (
    <div
      className="xl:flex xl:flex-row md:flex md:flex-row  sm:flex sm:flex-row xs:flex xs:flex-col  text-[#716966] font-semibold text-[18px]  mt-[55px] mb-16  
    xl:gap-20
    md:gap-20
    sm:gap-20
    xs:gap-10"
    >
      <button className="text-blue-700  underline underline-offset-[15px] bold">
        Study
      </button>
      <button className="hover:text-blue-700 hover:underline hover:underline-offset-[15px] hover:bold">
        Quiz
      </button>
      <button className="hover:text-blue-700 hover:underline hover:underline-offset-[15px] hover:bold">
        Test
      </button>
      <button className="hover:text-blue-700 hover:underline hover:underline-offset-[15px] hover:bold">
        Game
      </button>
      <button className="hover:text-blue-700 hover:underline hover:underline-offset-[15px] hover:bold">
        Others
      </button>
    </div>
  );
};

export default Options;
