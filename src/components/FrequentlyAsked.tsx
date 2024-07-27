import React from "react";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import AccordinCards from "./AccordinCards";
import QuestonCard from "./QuestionCard";

const FrequentlyAsked = () => {
  return (
    <>
      <div className="h-fit w-auto flex flex-col  ">
        <div className="flex flex-col justify-center items-center mt-20 gap-4">
          <FaRegFaceSmileWink className="text-2xl" />
          <h1 className="uppercase font-bold tracking-wider text-xs text-emerald-300">
            AMAZING BENEFITS
          </h1>
          <h1 className="text-4xl sm:text-left text-center text-white">
            Stunning Benefits of our Courses
          </h1>
          <h2 className="text-zinc-300 text-md w-auto text-center">
            Explore the incredible advantages of enrolling in our courses and
            enhancing your skills.
          </h2>
        </div>
        <div className="w-auto flex flex-col gap-12 justify-center mt-12 items-center">
          <div className="w-auto px-4 gap-4 flex flex-col justify-center ">
            <h1 className="text-zinc-400 font-bold">General Questions</h1>
            <div className="flex sm:flex-row flex-col gap-4 justify-center">
              <AccordinCards />
              <AccordinCards />
            </div>
          </div>
          <div className="w-auto px-4 gap-4 flex flex-col justify-center ">
            <h1 className="text-zinc-400 font-bold">
              Payment Related Questions
            </h1>
            <div className="flex sm:flex-row flex-col gap-4 justify-center">
              <AccordinCards />
              <AccordinCards />
            </div>
          </div>
          <div className="pb-8">
            <QuestonCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentlyAsked;
