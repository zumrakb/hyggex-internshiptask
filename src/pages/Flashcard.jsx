import React from "react";
import Path from "../components/Path";
import { Link } from "react-router-dom";
const Flashcard = () => {
  const subjectList = [
    "Mathematics",
    "Art",
    "Science",
    "Music",
    "History",
    "Geography",
    "Philosophy",
  ];
  return (
    <div>
      <Path />
      <div className="flex flex-col mx-auto w-fit gap-3 border border-blue-500 p-5 mt-11 rounded-2xl">
        {subjectList.map((subject) => (
          <Link
            className="w-fit"
            to={`/flashcard/${subject
              .split(" ")
              .map((chunck) => chunck.toLowerCase())
              .join("-")}`}
          >
            <p>{subject}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Flashcard;
