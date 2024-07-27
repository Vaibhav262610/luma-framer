"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Courses from "@/data/courses";
import { SparklesCore } from "@/components/ui/sparkles";
import Footer from "@/components/Footer";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { CiClock2, CiSearch } from "react-icons/ci";
import Link from "next/link";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar />
      <div className="w-full opacity-40 absolute inset-0 h-[60vh]">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative sm:flex hidden">
        <motion.img
          drag
          dragSnapToOrigin={true}
          className=" cursor-grab absolute z-50 top-[50vh] right-[50vh] w-36"
          src="https://framerusercontent.com/images/YMQr3A29sQDnKCdgHPJEvp0iCU.png?scale-down-to=1024"
          alt=""
        />
        <motion.img
          drag
          dragSnapToOrigin={true}
          className="cursor-grab absolute z-40 top-[15vh] left-[25vh] w-36 blur-[2px]"
          src="https://framerusercontent.com/images/43n4nr2NJrNnRAHVipDXCJPZY.png?scale-down-to=1024"
          alt=""
        />
        <motion.img
          drag
          dragSnapToOrigin={true}
          className="cursor-grab absolute z-30 w-32 top-[10vh] right-[35vh] blur-[5px] "
          src="https://framerusercontent.com/images/iVEIMoOeg0btapECZ8Lmewv6gg.png?scale-down-to=1024"
          alt=""
        />
        <motion.img
          drag
          dragSnapToOrigin={true}
          className="cursor-grab absolute z-20 w-20 top-[40vh] left-[40vh] blur-md"
          src="https://framerusercontent.com/images/ioBrAcmXYF8LRSxJApCAUh9LI.png?scale-down-to=1024"
          alt=""
        />
        <motion.img
          drag
          dragSnapToOrigin={true}
          className="cursor-grab absolute z-10 w-24 top-[40vh] right-[30vh] blur-[2px]"
          src="https://framerusercontent.com/images/vz9kBTFoRFtcblXGjYPD8q3K3k.png?scale-down-to=1024"
          alt=""
        />
      </div>
      <div className="border-b-2 border-zinc-800 h-[60vh] w-full flex justify-center items-center">
        <div className="gap-4 flex flex-col justify-center sm:text-left text-center items-center ">
          <div className="font-normal flex gap-2 items-center">
            <h1 className="font-normal text-zinc-300">Home</h1>
            <FaArrowRightLong className="text-white text-sm" />
            <h1 className="text-white font-medium">Courses</h1>
          </div>
          <h1 className="text-2xl sm:text-5xl font-bold w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
            Browse All Our Courses
          </h1>
          <h2 className="tracking-wider text-zinc-300 text-xs sm:text-md text-center w-9/12">
            Check out our World Class Courses Below. From Web Design to Video
            Editing you ll find all kinds of Courses.
          </h2>
        </div>
      </div>
      <div className="flex justify-center  items-center">
        <div className="h-fit py-20 sm:py-40 gap-8 flex flex-col justify-between items-center">
          <div className="flex w-full justify-around md:justify-between items-center text-white">
            <h1 className="text-md sm:text-xl text-zinc-300 font-medium">
              All Courses
            </h1>
            <div className="flex bg-zinc-900 border-[1px] border-zinc-700 rounded-md cursor-pointer items-center gap-2 px-[6px] py-1 ">
              <CiSearch className="text-md sm:text-lg text-white font-bold" />
              <input
                type="text"
                id="search"
                autoComplete="off"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none text-sm sm:text-md  text-zinc-400 py-1 px-0 sm:px-2"
                placeholder="Search Courses..."
              />
              <p className="border-2 text-xs px-[0.4rem] py-[0.1rem] text-zinc-500 font-semibold rounded-md  border-zinc-700">
                S
              </p>
            </div>
          </div>
          <div className="md:grid md:grid-rows-2 md:grid-cols-3 flex flex-wrap gap-8 justify-center  items-center">
            {Courses.filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((val) => {
              return (
                <div
                  key={val.id}
                  className="border-2 bg-zinc-900/70 border-zinc-800 rounded-xl py-4 px-4 "
                >
                  <div className="flex flex-col gap-4">
                    <Link href={`/courses/${val.id}`}>
                      <div className="hover:opacity-70 duration-200">
                        <img
                          className="w-[20rem] h-[14rem] object-cover rounded-xl border-2 border-zinc-800"
                          src={val.image}
                          alt="not found"
                        />
                      </div>
                    </Link>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex gap-1">
                        <FaStar className="fill-emerald-300 text-sm" />
                        <FaStar className="fill-emerald-300 text-sm" />
                        <FaStar className="fill-emerald-300 text-sm" />
                        <FaStar className="fill-emerald-300 text-sm" />
                        <FaStar className="fill-emerald-300 text-sm" />
                        <h1 className="text-xs ml-2 font-semibold text-zinc-300">
                          Rated 5 Stars
                        </h1>
                      </div>
                      <div className="w-fit">
                        <p className="border-2 bg-white/15 px-[0.4rem] py-[0.1rem] text-white text-sm font-semibold rounded-md  border-zinc-700">
                          $ {val.price}
                        </p>
                      </div>
                    </div>
                    <Link href={`/courses/${val.id}`}>
                      <div>
                        <h1 className="text-xl hover:text-zinc-400 duration-200 font-medium text-white">
                          {val.title}
                        </h1>
                      </div>
                    </Link>
                    <div className="flex gap-3 items-center text-md font-medium text-zinc-300">
                      <div className=" flex justify-center items-center w-9 h-9 overflow-hidden rounded-full border-2">
                        <img
                          src="https://framerusercontent.com/images/9YkRhwQBTCs0Nq8nwadDafro9g.jpg?scale-down-to=1024"
                          alt=""
                          // height={20}
                          className="w-full h-full object-cover"
                          // width={40}
                        />
                      </div>
                      <h1>Kevin Marko</h1>
                    </div>
                    <p className="w-[20rem] font-medium text-sm text-zinc-400">
                      {val.desc}
                    </p>
                    <div className="flex gap-8">
                      <div className="flex items-center gap-2 text-zinc-300 text-md font-medium">
                        <CiClock2 className="text-xl" />
                        <h1>{val.time}</h1>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300 text-md font-medium">
                        <GrNotes className="text-sm" />
                        <h1>{val.lessons}</h1>
                      </div>
                    </div>
                    <Link href={`/courses/${val.id}`}>
                      <div className="flex cursor-pointer bg-emerald-300 w-full font-semibold gap-20 justify-end px-4 py-2 rounded-md text-black items-center">
                        {/* <FaArrowRightLong className="hidden" /> */}
                        <button className="text-center">View Courses</button>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
