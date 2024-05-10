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
    <div
      className="text-[#696671] xl:flex xl:items-center md:flex md:flex-row sm:flex sm:flex-row xs:flex xs:items-center   xl:mx-[104px] xl:mt-20 xl:mb-20 
    md:mx-[104px] md:mt-20 md:mb-20
    sm:mx-[104px] sm:mt-20 sm:mb-20
    xs:mx-10 xs:mt-10 xs:mb-10
    
    gap-3"
    >
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
