import React from "react";

import RelationsAndFunctions from "../components/RelationsAndFunctions";
import FAQ from "../components/FAQ";
import Path from "../components/Path";

const Chapter = () => {
  return (
    <div className="font-['inter']">
      <Path />
      <RelationsAndFunctions />
      <FAQ />
    </div>
  );
};

export default Chapter;
