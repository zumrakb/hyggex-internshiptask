import React from "react";
import home from "../assets/home-icon.svg";
import arrow from "../assets/arrow-icon.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Path = () => {
  const params = useParams();
  console.log(params);
  const { pageName, subject, chapter } = params;

  const subjectName = subject
    ?.split("-")
    ?.map(
      (chunk) =>
        chunk?.charAt(0)?.toUpperCase() + chunk?.slice(1)?.toLowerCase()
    )
    ?.join(" ");

  const chapterName = chapter
    ?.split("-")
    ?.map(
      (chunk) => chunk?.charAt(0).toUpperCase() + chunk?.slice(1)?.toLowerCase()
    )
    ?.join(" ");

  return (
    <div className="text-[#696671] flex items-center mx-[104px] gap-3 mt-20 mb-20">
      <Link to={"/"}>
        <img className="w-6" src={home} alt="" />
      </Link>
      {pageName && (
        <>
          <img src={arrow} alt="" />
          <Link to={`/${pageName}`}>
            <button>
              {pageName?.charAt(0)?.toUpperCase() +
                pageName?.slice(1)?.toLowerCase()}
            </button>
          </Link>
        </>
      )}
      {subjectName && (
        <>
          <img src={arrow} alt="" />
          <Link to={`/${pageName}/${subject}`}>
            <button>{subjectName}</button>
          </Link>
        </>
      )}

      {chapterName && (
        <>
          <img src={arrow} alt="" />
          <Link to={`/${pageName}/${subject}/${chapter}`}>
            <button>{chapterName}</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Path;
