import Navbar from "@/components/Navbar";
import React from "react";
import { FaArrowLeftLong, FaArrowRightLong, FaStar } from "react-icons/fa6";
import Courses from "@/data/courses";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { GrNotes } from "react-icons/gr";
import { GoVideo } from "react-icons/go";
import Footer from "@/components/Footer";

const page = ({ params }: { params: { courseId: number } }) => {
  const courseData = Courses[params.courseId - 1];

  return (
    <>
      <Navbar />
      <div className="h-fit py-40  flex-col text-white w-full flex justify-center items-center">
        <div className="flex justify-between w-8/12">
          <Link href="/courses">
            <div className="flex duration-200 hover:text-zinc-400 items-center gap-3">
              <FaArrowLeftLong className="" />
              <h1 className="font-medium">Back to All Courses</h1>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/">
              <h1 className="font-normal text-zinc-400 hover:text-white cursor-pointer duration-200">
                Home
              </h1>
            </Link>
            <FaArrowRightLong className="text-white text-sm" />
            <Link href="/courses">
              <h1 className="text-zinc-400 font-medium hover:text-white cursor-pointer duration-200">
                Courses
              </h1>
            </Link>
            <FaArrowRightLong className="text-white text-sm" />
            <h1 className="text-white font-medium">{courseData.title}</h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex pt-8 gap-8 justify-center flex-wrap w-10/12 items-center">
            <div className="border border-zinc-600  bg-gradient-to-r from-white/10 to-zinc-900/20 rounded-xl py-8 px-8 ">
              <div className="flex gap-4">
                <Link href={`/courses/${courseData.id}`}>
                  <div className="hover:opacity-70 duration-200">
                    <img
                      className="w-[45rem] h-[25rem] object-cover rounded-xl border-2 border-zinc-800"
                      src={courseData.image}
                      alt="not found"
                    />
                  </div>
                </Link>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center  justify-between mt-3">
                    <div className="flex gap-1 items-center">
                      <FaStar className="  fill-emerald-300 text-lg" />
                      <FaStar className="  fill-emerald-300 text-lg" />
                      <FaStar className="  fill-emerald-300 text-lg" />
                      <FaStar className="  fill-emerald-300 text-lg" />
                      <FaStar className="  fill-emerald-300 text-lg" />
                      <h1 className="text-sm ml-2 font-semibold  text-zinc-300">
                        Rated 5 Stars
                      </h1>
                    </div>
                  </div>
                  <Link href={`/courses/${courseData.id}`}>
                    <h1 className="text-4xl font-bold w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
                      {courseData.title}
                    </h1>
                  </Link>
                  <div className="flex gap-3 items-center text-md font-medium text-zinc-300">
                    <div className=" flex justify-center items-center w-9 h-9 overflow-hidden rounded-full border-2">
                      <img
                        src="https://framerusercontent.com/images/9YkRhwQBTCs0Nq8nwadDafro9g.jpg?scale-down-to=1024"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h1 className="text-lg">Kevin Marko</h1>
                  </div>
                  <p className="w-[30rem] font-medium text-md text-zinc-400">
                    {courseData.desc}
                  </p>
                  <h1 className="text-4xl font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                    ${courseData.price}
                  </h1>
                  <div className="flex justify-between">
                    <Link href={`/courses/${courseData.id}`}>
                      <div className="flex cursor-pointer bg-emerald-300 w-72 font-semibold gap-16 justify-end px-4 py-2 rounded-md text-black items-center">
                        <button className="text-center">View Courses</button>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="border rounded-lg flex items-center gap-2 py-2 px-6 border-zinc-700">
                        <h1 className="text-sm">Access Lessons</h1>
                        <GoVideo className="text-zinc-400" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
