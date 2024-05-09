import React from "react";

import logo from "../assets/logo-letter/H-logo.svg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  function handleLogoClick() {
    navigate("/");
  }
  return (
    <div className="cursor-pointer" onClick={() => handleLogoClick()}>
      <img src={logo} alt="letter" />
    </div>
  );
};

export default Logo;
