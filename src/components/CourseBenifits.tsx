import React from "react";
import { FaRegComment, FaRegFaceSmileWink } from "react-icons/fa6";
import { GoTrophy } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import { IoInfinite } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { RxPerson } from "react-icons/rx";

const CourseBenifits = () => {
  const data = [
    {
      id: 1,
      icon: <RxPerson />,
      title: "Built by Professionals",
      desc: "Get the best Experience knowing that our Courses are built by Professionals.",
    },
    {
      id: 2,
      icon: <GoTrophy />,
      title: "Get Completion Awards",
      desc: "Get a Completion Award from our Team to boost motivation & success.",
    },
    {
      id: 3,
      icon: <FaRegComment />,
      title: "Fast Chat Support",
      desc: "Need help? We&apos;re just a Quick Chat Away. Available 24/7/365.",
    },
    {
      id: 4,
      icon: <IoInfinite />,
      title: "Lifetime Access",
      desc: "With Just One Payment, you&apos;ll get Lifetime Access to the Course.",
    },
    {
      id: 5,
      icon: <GrGroup />,
      title: "Access to Private Community",
      desc: "Get Access to Our Private Community and Meet Like Minded People & grow.",
    },
    {
      id: 6,
      icon: <LuDownload />,
      title: "Download for Offline Viewing",
      desc: "Our Courses can be Download, allowing you to watch them even on an Airplane.",
    },
  ];

  return (
    <>
      <div className=" flex  flex-col gap-4 h-fit w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-20 gap-4">
          <FaRegFaceSmileWink className="text-white text-2xl" />
          <h1 className="uppercase font-bold tracking-wider text-xs text-emerald-300">
            AMAZING BENEFITS
          </h1>
          <h1 className="text-4xl sm:text-left text-center text-white">
            Stunning Benefits of our Courses
          </h1>
          <h2 className="text-zinc-300 text-md w-auto sm:w-[30rem] text-center">
            Explore the incredible advantages of enrolling in our courses and
            enhancing your skills.
          </h2>
        </div>
        <div className="sm:grid sm:grid-rows-2 sm:grid-cols-2 flex flex-col gap-4 w-full lg:max-w-[60%] justify-center items-center mt-12">
          {data.map((val) => {
            return (
              <div
                key={val.id}
                className="border-[1px] max-w-96 bg-gradient-to-r from-black to-white/10 hover:to-white/15 duration-200 transition-all ease-in-out border-zinc-800 rounded-lg py-5 px-5 flex flex-col gap-2"
              >
                <div className="font-black text-2xl text-white">{val.icon}</div>
                <h1 className="text-xl font-medium text-white ">{val.title}</h1>
                <h2 className="w-auto text-sm text-zinc-400">{val.desc}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CourseBenifits;
