import React from "react";
import { Link, useParams } from "react-router-dom";
import Path from "../components/Path";
const Subject = () => {
  const { subject } = useParams();

  const subjectTOChapterMap = {
    MATHEMATICS: [
      "Relations and Function",
      "Matrix and Determinants",
      "Cooridinate Geometry",
      "Probability",
      "Integration",
      "Differential Equations",
      "Differentiation",
    ],
    ART: [
      "Art History",
      "Drawing Techniques",
      "Color Theory",
      "Sculpture",
      "Art Movements",
      "Digital Art",
      "Art Criticism",
    ],

    SCIENCE: [
      "Biology",
      "Chemistry",
      "Physics",
      "Environmental Science",
      "Anatomy and Physiology",
      "Astronomy",
      "Geology",
    ],

    MUSIC: [
      "Music Theory",
      "Music History",
      "Composition",
      "Instrumental Techniques",
      "Music Technology",
      "World Music",
      "Music Appreciation",
    ],

    HISTORY: [
      "Ancient History",
      "Medieval History",
      "Modern History",
      "World Wars",
      "Colonialism and Imperialism",
      "Historiography",
      "Cultural History",
    ],

    GEOGRAPHY: [
      "Physical Geography",
      "Human Geography",
      "Geographical Techniques",
      "Economic Geography",
      "Political Geography",
      "Environmental Geography",
      "Geographic Information Systems (GIS)",
    ],

    PHILOSOPHY: [
      "Ethics",
      "Metaphysics",
      "Epistemology",
      "Logic",
      "Political Philosophy",
      "Philosophy of Mind",
      "Aesthetics",
    ],
  };

  const chapterList = subjectTOChapterMap[subject.toUpperCase()];

  return (
    <>
      <Path />
      <div className="flex flex-col mx-auto w-fit gap-3 border border-blue-500 p-5 mt-11">
        {chapterList.map((chapter) => (
          <Link
            className="w-fit"
            to={`/flashcard/${subject}/${chapter
              .split(" ")
              .map((chunck) => chunck.toLowerCase())
              .join("-")}`}
          >
            <p>{chapter}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Subject;
