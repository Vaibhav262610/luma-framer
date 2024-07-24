"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { motion } from "framer-motion";
import Courses from "@/data/courses";
import { SparklesCore } from "@/components/ui/sparkles";
import Footer from "@/components/Footer";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { CiClock2 } from "react-icons/ci";

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
      <div className="relative ">
        <motion.img
          data-aos="zoom-in"
          className=" cursor-grab absolute z-50 top-[50vh] right-[50vh] w-36"
          src="https://framerusercontent.com/images/YMQr3A29sQDnKCdgHPJEvp0iCU.png?scale-down-to=1024"
          alt=""
        />
        <motion.img
          data-aos="zoom-in"
          className="cursor-grab absolute z-40 top-[15vh] left-[25vh] w-36 blur-[2px]"
          src="https://framerusercontent.com/images/43n4nr2NJrNnRAHVipDXCJPZY.png?scale-down-to=1024"
          alt=""
        />
        <motion.img
          data-aos="zoom-in"
          className="cursor-grab absolute z-30 w-32 top-[10vh] right-[35vh] blur-[5px] "
          src="https://framerusercontent.com/images/iVEIMoOeg0btapECZ8Lmewv6gg.png?scale-down-to=1024"
          alt=""
        />
        <motion.img
          data-aos="zoom-in"
          className="cursor-grab absolute z-20 w-20 top-[40vh] left-[40vh] blur-md"
          src="https://framerusercontent.com/images/ioBrAcmXYF8LRSxJApCAUh9LI.png?scale-down-to=1024"
          alt=""
        />
        <motion.img
          data-aos="zoom-in"
          className="cursor-grab absolute z-10 w-24 top-[40vh] right-[30vh] blur-[2px]"
          src="https://framerusercontent.com/images/vz9kBTFoRFtcblXGjYPD8q3K3k.png?scale-down-to=1024"
          alt=""
        />
      </div>
      <div className="border-b-2 border-zinc-800 h-[60vh] w-full flex justify-center items-center">
        <div className="gap-4 flex flex-col justify-center items-center ">
          <div
            data-aos="fade-up"
            className="font-normal flex gap-2 items-center"
          >
            <h1 className="font-normal text-zinc-300">Home</h1>
            <FaArrowRightLong className="text-sm" />
            <h1 className="text-white">Courses</h1>
          </div>
          <h1
            data-aos="fade-up"
            className="text-5xl font-bold w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500"
          >
            Browse All Our Courses
          </h1>
          <h2 data-aos="fade-up" className="tracking-wider text-center w-9/12">
            Check out our World Class Courses Below. From Web Design to Video
            Editing you ll find all kinds of Courses.
          </h2>
        </div>
      </div>
      <div className="h-fit w-full py-40 flex flex-col justify-center items-center">
        <div></div>
        <div className="flex gap-8 justify-center flex-wrap w-10/12 items-center">
          {Courses.map((val) => {
            return (
              <div
                key={val.id}
                className="border-2 bg-zinc-900/70 border-zinc-800 rounded-xl py-4 px-4 "
              >
                <div className="flex flex-col gap-4">
                  <div className="">
                    <img
                      className="w-[20rem] h-[14rem] object-cover rounded-xl border-2 border-zinc-800"
                      src={val.image}
                      alt="not found"
                    />
                  </div>
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
                  <div>
                    <h1 className="text-xl font-medium">{val.title}</h1>
                  </div>
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
                  <div className="flex cursor-pointer bg-emerald-300 w-full font-semibold gap-20 justify-end px-4 py-2 rounded-md text-black items-center">
                    {/* <FaArrowRightLong className="hidden" /> */}
                    <button className="text-center">View Courses</button>
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
