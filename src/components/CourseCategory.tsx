import Link from "next/link";
import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiTable } from "react-icons/fi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoCodeSlash } from "react-icons/io5";
import { PiFilmReel, PiPencilSimpleLine } from "react-icons/pi";
import { RiMenuSearchLine } from "react-icons/ri";

const CourseCategory = () => {
  const data = [
    {
      id: 1,
      icon: <FiTable />,
      title: "Website Design",
      desc: "Our Web Design Courses allow you to Create stunning Webites.",
    },
    {
      id: 2,
      icon: <HiOutlineSpeakerphone />,
      title: "Digital Marketing",
      desc: "Be a Digital Marketing Expret with our Easy to Follow Courses.",
    },
    {
      id: 3,
      icon: <PiFilmReel />,
      title: "Video Editing",
      desc: "Start Shipping Next Level Edits with our Video Editing Courses.",
    },
    {
      id: 4,
      icon: <IoCodeSlash />,
      title: "Coding",
      desc: "Explore our Coding Courses to develop all kinds of programs.",
    },
    {
      id: 5,
      icon: <PiPencilSimpleLine />,
      title: "Content Writing",
      desc: "Write Stunning content with our Content Writing Courses.",
    },
    {
      id: 6,
      icon: <BsGraphUp />,
      title: "SEO",
      desc: "Be Seen on the Top of Search Results with our SEO Courses.",
    },
  ];
  return (
    <>
      <div className="flex bg-pink-500 w-full items-center justify-center">
        <div className="h-screen category xl:w-full xl:px-0 px-7 max-w-11/12 gap-12 flex xl:flex-row flex-col xl:items-center justify-center ">
          <div className="flex items-start justify-start text-left flex-col gap-2">
            <RiMenuSearchLine className="text-2xl" />
            <h1 className="text-4xl font-medium w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Browse by Course
            </h1>
            <h1 className="text-4xl font-medium w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Category
            </h1>
            <h2 className="text-zinc-300 w-[20rem] tracking-wide">
              Browse Courses through Categories to find the Perfect Course.
            </h2>
            <Link href="/courses">
              <div className="mt-2 cursor-pointer flex bg-emerald-300 font-semibold w-fit px-4 py-2 rounded-md text-black items-center gap-2">
                <button>Explore Our Courses</button>
                <FaArrowRightLong />
              </div>
            </Link>
          </div>
          <div className="grid grid-flow-col md:grid-cols-2 md:grid-rows-3 grid-cols-3 grid-rows-2 justify-center items-center gap-4 ">
            {data.map((val) => {
              return (
                <div
                  key={val.id}
                  className="border-[1px] text-white w-full xl:w-[16rem] bg-gradient-to-r from-white/5 to-black hover:from-white/10 duration-200 transition-all ease-in-out border-zinc-800 rounded-lg py-5 px-5 flex flex-col gap-2"
                >
                  <div className="font-black text-2xl mb-12">{val.icon}</div>
                  <h1 className="text-2xl font-medium ">{val.title}</h1>
                  <h2 className="md:w-auto w-[13rem] text-sm text-zinc-400">
                    {val.desc}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCategory;
