import React from "react";

const Menu = () => {
  return (
    <div
      className="text-[#3A3740] font-[20px] flex flex-row   leading-[22px] 
   xl:gap-[40px]
   lg:gap-[40px]
   md:gap-[40px]
   sm:gap-[40px]
   xs:gap-[30px]
    "
    >
      <button>Home</button>
      <button>Flashcard</button>
      <button>Contact</button>
      <button>FAQ</button>
      <button className="bg-gradient-to-b from-blue-900 to-blue-500 text-white rounded-[32px] w-[128px] h-[48px] py-[13px] px-[40px] ">
        Login
      </button>
    </div>
  );
};

export default Menu;
