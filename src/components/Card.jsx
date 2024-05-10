import React, { useState } from "react";
import lamp from "../assets/lamp-icon.svg";
import volume from "../assets/volume-icon.svg";
import restart from "../assets/restart-icon.svg";
import fullscreen from "../assets/fullscreen-icon.svg";
import rightarrow from "../assets/rightarrow-icon.svg";
import leftarrow from "../assets/leftarrow-icon.svg";

const Card = ({ flashCardNo }) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className=" xl:w-[700px] xl:h-[390px] md:w-[700px] md:h-[390px] sm:w-[580px] sm:h-[290px] xs:w-[470px] xs:h-[230px] perspective-1000">
      <div
        className={` relative w-[100%] h-[100%]  transition duration-300  ease-in-out preserve-3d ${
          isFlipped ? "rotate-y-180" : "rotate-y-0"
        }`}
      >
        <div
          className={`cursor-pointer  bg-gradient-to-br from-blue-600 to-blue-900 w-full absolute h-[100%] rounded-[50px] flex flex-col items-center rotate-y-180`}
          onClick={handleFlip}
        >
          <div className="flex w-full  justify-between xl:p-10 md:p-10 sm:p-9 xs:p-10">
            <button>
              <img src={lamp} alt="" />
            </button>
            <button>
              <img src={volume} alt="" />
            </button>
          </div>
          <p className="text-[35px] text-white xl:p-20 md:p-20 sm:p-12 xs:p-0">
            9 + 6 + 7x - 2x - 3
          </p>
        </div>
        <div
          className={`cursor-pointer text-white w-full backface-hidden  absolute h-[100%] bg-gradient-to-br from-blue-600 to-blue-900  rounded-[50px] flex flex-col items-center transform`}
          onClick={handleFlip}
        >
          <div className="flex w-full p-10 justify-between">
            <button>
              <img src={lamp} alt="" />
            </button>
            <button>
              <img src={volume} alt="" />
            </button>
          </div>
          <p className="text-[35px] text-white xl:p-20 md:p-20 sm:p-12 xs:p-0">
            5x + 12
          </p>
        </div>
      </div>
      <div className="flex justify-between  mb-20  xl:px-16 md:px-16 sm:px-10 xs:px-6 xl:mt-20 md:mt-20 sm:mt-12 xs:mt-10">
        <button>
          <img src={restart} alt="" className="w-[25px]" />
        </button>
        <div className="flex items-center gap-5">
          <button>
            <img src={leftarrow} alt="" className="w-[50px]" />
          </button>
          <p className="text-[20px] text-blue-950 font-bold">
            {flashCardNo}/10
          </p>
          <button>
            <img src={rightarrow} alt="" className="w-[50px]" />
          </button>
        </div>
        <button>
          <img src={fullscreen} alt="" className="w-[25px]" />
        </button>
      </div>
    </div>
  );
};

export default Card;
