import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Statistcal = () => {
  return (
    <>
      <div className="h-screen bg-red-400 w-full flex justify-center items-center ">
        <div className="border flex border-zinc-800 rounded-lg py-10 px-10 bg-gradient-to-r from-zinc-950 to-white/10">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-emerald-300 text-sm">ACHIEVEMENTS</h1>
            <h1 className="text-4xl font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Statistical Evaluation
            </h1>
            <h2 className="text-zinc-300 text-lg w-[30rem] leading-8">
              We&apos;ve achieved a lot over the past year helping people across
              the Globe.
            </h2>
            <div className="border w-[10rem] mt-4 border-zinc-800"></div>
            <div className="flex flex-col gap-5 mt-8">
              <div className="flex justify-between items-center w-10/12">
                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl text-emerald-300 font-medium">
                    5000+
                  </h1>
                  <h1 className="text-zinc-300">Happy Learners</h1>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl text-emerald-300 font-medium">20+</h1>
                  <h1 className="text-zinc-300">Advanced Courses</h1>
                </div>
              </div>
              <div className="flex justify-between items-center w-10/12">
                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl text-emerald-300 font-medium">7</h1>
                  <h1 className="text-zinc-300">Pro Teachers</h1>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl text-emerald-300 font-medium">4.9</h1>
                  <h1 className="text-zinc-300">Customer Ratnig</h1>
                </div>
              </div>
            </div>
            <div className="flex cursor-pointer bg-emerald-400 font-semibold w-fit px-4 py-2 mt-5 rounded-md text-black items-center gap-2">
              <button>More About Us</button>
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistcal;
