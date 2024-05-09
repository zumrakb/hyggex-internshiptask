import React from "react";

const Options = () => {
  return (
    <div className="flex gap-20 text-[#716966] font-semibold text-[18px]  mt-[55px] mb-16  ">
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
