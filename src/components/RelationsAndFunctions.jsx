import React, { useState } from "react";
import Options from "./Options";
import Card from "./Card";
import publishedby from "../assets/publishedby-logo.svg";
import plus from "../assets/plus.svg";

const RelationsAndFunctions = () => {
  const [flashCardNo, setflashCardNo] = useState(0);

  return (
    <div className="flex flex-col xl:px-[104px] lg:px-[104px] md:px-[104px] sm:px-[50px] xs:px-[20px]">
      <h4
        className="bg-gradient-to-r from-blue-900 to-blue-500  text-transparent bg-clip-text xl:text-[28px]  md:text-[28px]  sm:text-[27px]  xs:text-[20px] font-bold flex xs:text-center
      "
      >
        Relations and Functions (Mathematics)
      </h4>
      <div className="flex flex-col items-center">
        <Options />
        <Card flashCardNo={flashCardNo} />
        <div
          className="xl:flex xl:flex-row xl:justify-between
        md:flex md:flex-row md:justify-between
        sm:flex sm:flex-row sm:justify-between
        xs:flex xs:flex-row xs:justify-center xs:items-center xs:gap-5
        xl:gap-0
        lg:gap-0
        md:gap-0
        sm:gap-5
    
        w-[100%] xl:mb-36 xl:mt-48
        md:mb-36 md:mt-48
        sm:mb-25 sm:mt-48
        xs:mb-14 xs:mt-32
        "
        >
          <img src={publishedby} alt="" className="" />
          <button
            className="text-blue-800 font-bold flex items-center gap-3 text-lg"
            onClick={() => {
              setflashCardNo(flashCardNo + 1);
            }}
          >
            <img
              src={plus}
              alt=""
              className="xl:w-[45px] lg:w-[45px] md:w-[45px] sm:w-[40px] xs:w-[35px] "
            />
            Create Flashcard
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelationsAndFunctions;
