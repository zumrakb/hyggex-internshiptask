import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div
      className="flex justify-between mx-[104px] mt-[32px] 
    "
    >
      <Logo />
      <Menu />
    </div>
  );
};

export default Navbar;
