import React, { useState } from "react";
import data from "./api";
import Question from "./Question";

const Questions = () => {
  const [questions, setQuestions] = useState(data);
  
  return (
    <div className="faq-container rounded w-full lg:flex lg:space-x-4 bg-white p-5">
      <div className="font-bold text-lg text-center lg:my-4 ">Frequently Asked Questions</div>
      <div className="my-4 w-full">
        {questions.map((item) => {
          return (
            <Question key={item.id} {...item}/>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;





