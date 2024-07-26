import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import Courses from "@/data/courses";
import Link from "next/link";

const FeaturedCourses = () => {
  const courseData = Courses.filter((item, index) => index < 3);

  return (
    <>
      <div className="flex h-fit w-full justify-center items-center">
        <div className="h-fit flex-col mt-10 gap-4 flex justify-center items-center">
          <div className="flex featured-text mt-24 items-start px-5  w-full justify-between">
            <h1 className="text-4xl font-medium w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
              Featured Courses
            </h1>
            <Link href="/courses">
              <div className="flex text-transparent font-semibold w-fit px-4 py-2 rounded-md items-center gap-2">
                <button>Explore Our Courses</button>
                <FaArrowRightLong />
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap featured-card w-full items-center justify-center gap-5 mt-2">
            {courseData.map((val) => {
              return (
                <div
                  key={val.id}
                  className="border-2 bg-zinc-900/70 border-zinc-800 rounded-xl py-4 px-4 "
                >
                  <div className="flex flex-col gap-4">
                    <Link href={`/courses`}>
                      <div className="">
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
                      <div className="w-fit ">
                        <p className="border-2 bg-white/15 px-[0.4rem] py-[0.1rem] text-white text-sm font-semibold rounded-md  border-zinc-700">
                          $ {val.price}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-xl font-medium text-white">
                        {val.title}
                      </h1>
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
                    <Link href={`/courses`}>
                      <div className="flex bg-emerald-300 w-full cursor-pointer font-semibold gap-20 justify-end px-4 py-2 rounded-md text-black items-center">
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
    </>
  );
};

export default FeaturedCourses;
