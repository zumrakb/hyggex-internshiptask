import React, { useState } from "react";

import { FaChevronUp } from "react-icons/fa";

const Question = ({ question, answer }) => {
  const [down, setDown] = useState(false);
  function handleDropdown() {
    setDown(!down);
  }
  return (
    <div className=" xl:w-[900px]  lg:w-[800px] md:w-[700px] sm:w-[500px]  border p-5 rounded-3xl border-blue-900 mb-11">
      <div className={`flex justify-between `}>
        <p className="font-bold text-blue-950">{question}</p>

        <button
          className={`transition duration-300 ${!down ? "rotate-180" : ""} `}
          onClick={() => handleDropdown()}
        >
          <FaChevronUp size={22} />
        </button>
      </div>
      <div className="overflow-hidden">
        <p
          className={`font-seminold text-blue-950 transition-all duration-300 ${
            down ? "mt-3" : "-mt-[100%]"
          }`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Question;
