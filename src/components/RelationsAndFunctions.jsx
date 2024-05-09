import React, { useState } from "react";
import Options from "./Options";
import Card from "./Card";
import publishedby from "../assets/publishedby-logo.svg";
import plus from "../assets/plus.svg";

const RelationsAndFunctions = () => {
  const [flashCardNo, setflashCardNo] = useState(0);

  return (
    <div className="flex flex-col px-[104px]">
      <h4
        className="bg-gradient-to-r from-blue-900 to-blue-500  text-transparent bg-clip-text text-[28px] font-bold flex 
      "
      >
        Relations and Functions (Mathematics)
      </h4>
      <div className="flex flex-col items-center">
        <Options />
        <Card flashCardNo={flashCardNo} />
        <div className="flex justify-between w-[100%] mb-36 mt-48">
          <img src={publishedby} alt="" />
          <button
            className="text-blue-800 font-bold flex items-center gap-3 text-lg"
            onClick={() => {
              setflashCardNo(flashCardNo + 1);
            }}
          >
            <img src={plus} alt="" className="w-[45px]" />
            Create Flashcard
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelationsAndFunctions;
