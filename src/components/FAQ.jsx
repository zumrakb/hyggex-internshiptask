import React from "react";
import Question from "./Question";

const FAQ = () => {
  return (
    <div className="xl:-x-[104px] md:px-[104px] sm:px-[50px] xs:px-[30px] ">
      <h4 className="bg-gradient-to-r from-blue-900 to-blue-500  text-transparent bg-clip-text text-[45px] font-bold flex  mb-8">
        FAQ
      </h4>
      <Question
        question={"Can education flashcards be used for all age groups?"}
        answer={
          "Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners."
        }
      />
      <Question
        question={"How do education flashcards work?"}
        answer={
          "Education flashcards work by presenting a question or prompt on one side the corresponding answer or information on the other. Users can review the cards repetedly, reinforcing their memory and enhancing learning through repetition."
        }
      />
      <Question
        question={"Can education flashcards be used for test preparation?"}
        answer={
          "Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key consepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams."
        }
      />
    </div>
  );
};

export default FAQ;
