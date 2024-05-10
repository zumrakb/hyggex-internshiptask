import React from "react";

import logo from "../assets/logo-letter/H-logo.svg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  function handleLogoClick() {
    navigate("/");
  }
  return (
    <div
      className="cursor-pointer xl:mt-0 md:mt-0 sm:mt-10"
      onClick={() => handleLogoClick()}
    >
      <img src={logo} alt="letter" />
    </div>
  );
};

export default Logo;
