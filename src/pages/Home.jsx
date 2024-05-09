import React from "react";
import { Link } from "react-router-dom";
import Path from "../components/Path";

const Home = () => {
  return (
    <div>
      <Path />
      <div className="flex flex-col mx-auto w-fit gap-3 border border-blue-500 p-5 mt-11 rounded-2xl">
        <Link className="w-fit" to={`/flashcard`}>
          <p>Flashcard</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
