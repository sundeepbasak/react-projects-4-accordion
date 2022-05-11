import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { MinusIcon } from "@heroicons/react/solid";

const Question = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <article className="border rounded py-2 px-6 flex-col items-center my-2 hover:border-2 hover:border-red-400">
      <header className="flex items-center space-x-2 justify-between">
        <h1 className="font-semibold">{question}</h1>
        <button onClick={toggleHandler} className="p-2 bg-red-400 rounded-full">
          {!toggle && <PlusIcon className="h-5 w-5" />}
          {toggle && <MinusIcon className="h-5 w-5" />}
        </button>
      </header>
      {toggle && <p className="text-gray-400 mt-2">{answer}</p>}
    </article>
  );
};

export default Question;

/* 
LFD:
  <article>
    <header>
      <h1>{title}</h1>
      <button>
    </header>
    <p>{info}</p>
  </article>
*/

//using ternary operator -->
//{toggle ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}