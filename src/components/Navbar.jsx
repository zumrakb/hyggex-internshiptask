import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div
      className="gap-0 xl:flex xl:flex-row xl:justify-between xl:mx-[104px] xl:mt-[32px]
      md:flex md:flex-row md:justify-between md:mx-[104px] md:mt-[32px]
      sm:flex sm:flex-col sm:justify-center sm:items-center 
      xs:items-center xs:justify-center xs:flex xs:flex-col xs:mt-[25px] xs:gap-5 xs:mx-[104px]
    "
    >
      <Logo />
      <Menu />
    </div>
  );
};

export default Navbar;
