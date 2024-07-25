"use client";

import AccordinCards from "@/components/AccordinCards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuestonCard from "@/components/QuestionCard";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRightLong,
  FaRegCircleQuestion,
  FaRegPaperPlane,
} from "react-icons/fa6";
import { IoCallOutline, IoDocumentTextOutline } from "react-icons/io5";

const page = () => {
  const data = [
    {
      id: 1,
      icon: <FaRegPaperPlane />,
      heading: "Mail Us",
      subHeading: "hey@framerit.com",
    },
    {
      id: 2,
      icon: <FaRegCircleQuestion />,
      heading: "Check out FAQs",
      subHeading: "Get Quick Answers",
    },
    {
      id: 3,
      icon: <IoCallOutline />,
      heading: "Call Us",
      subHeading: "+1 234 567 77",
    },
    {
      id: 4,
      icon: <IoDocumentTextOutline />,
      heading: "Documentation",
      subHeading: "Instant Help Right Away.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="absolute  top-40 right-20 z-50">
        <motion.img
        drag
        dragSnapToOrigin = {true}
          src="https://framerusercontent.com/images/Cw7txRkj102SoTp368n2ufAhs.png?scale-down-to=1024"
          alt=""
          height={100}
          width={100}
        />
      </div>
      <div className="h-[80vh] border-b border-zinc-800 pt-40 w-full flex justify-center items-center text-white  bg-gradient-to-r from-transparent  to-zinc-700/10">
        <div className="flex flex-col gap-4">
          <div
            data-aos="fade-up"
            className="font-normal flex gap-3 items-center"
          >
            <Link href="/">
              <h1 className="font-normal hover:text-white duration-150 text-zinc-300">
                Home
              </h1>
            </Link>
            <FaArrowRightLong className="text-white text-sm" />
            <h1 className="text-white font-medium">Contact & Support</h1>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-6xl font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600"
          >
            How Can We Assist
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-6xl font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600"
          >
            You Today?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-zinc-400 w-[29rem] tracking-wide "
          >
            Need some assistance? Feel free to send us a message using this
            form, and we&apos;ll respond promptly!
          </p>
          <div className="w-20 font-bold h-1 rounded-lg mt-4 bg-emerald-400"></div>
          <div>
            <div className="flex flex-wrap w-1/2 items-center pt-4 gap-6">
              {data.map((val) => {
                return (
                  <div className="flex gap-3 w-56 ">
                    <div className="text-2xl border-2 px-3 py-3 w-fit  font-semibold rounded-lg  border-zinc-800">
                      {val.icon}
                    </div>
                    <div className="flex flex-col ">
                      <h1 className="font-semibold">{val.heading}</h1>
                      <h1 className="text-zinc-400 text-sm">
                        {val.subHeading}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-zinc-800/70 border border-zinc-700  to-zinc-900/90  py-8 px-8 rounded-lg absolute  right-32 bottom-8 z-30">
          <div className="flex gap-8">
            <div className="flex flex-col gap-1">
              <h2 className="uppercase text-zinc-400 font-semibold text-xs">
                first name
              </h2>
              <input
                type="text"
                placeholder="Vaibhav"
                className="text-zinc-400 placeholder-zinc-500 text-sm outline-none bg-transparent border border-zinc-600 rounded-lg  py-2 px-4"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="uppercase text-zinc-400 font-semibold text-xs">
                last name
              </h2>
              <input
                type="text"
                placeholder="Rajpoot"
                className="text-zinc-400 placeholder-zinc-500 outline-none text-sm bg-transparent border border-zinc-600 rounded-lg  py-2 px-4"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex mt-4 flex-col gap-1">
              <h2 className="uppercase text-zinc-400 font-semibold text-xs">
                Email
              </h2>
              <input
                type="text"
                placeholder="hey@gmaiil.com"
                className="text-zinc-400 placeholder-zinc-500 outline-none text-sm bg-transparent border border-zinc-600 rounded-lg  py-2 px-4"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="uppercase text-zinc-400 font-semibold text-xs">
                subject
              </h2>
              <input
                type="text"
                placeholder="Your Subject"
                className="text-zinc-400 placeholder-zinc-500 outline-none text-sm bg-transparent border border-zinc-600 rounded-lg  py-2 px-4"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="uppercase text-zinc-400 font-semibold text-xs">
                message
              </h2>
              <textarea
                placeholder="Your Message"
                className="text-zinc-400 placeholder-zinc-500 outline-none text-sm bg-transparent border border-zinc-600 rounded-lg  py-2 px-4"
                name="w3review"
                rows={8}
              ></textarea>
            </div>
            <Link href="/">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="flex cursor-pointer bg-emerald-400 font-semibold w-full justify-center px-4 py-2 rounded-md text-black items-center gap-2"
              >
                <button>Send Message</button>
                <FaArrowRightLong />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full z-10 opacity-30 absolute inset-0 h-[60vh]">
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
      </div>
      <div className="  flex w-full pt-12 justify-center items-center text-white">
        <div className="w-8/12 px-8 flex flex-col gap-20 ">
          <div className="flex flex-col gap-3 mb-2">
            <h1
              data-aos="fade-up"
              data-aos-duration="500"
              className="text-3xl font-medium w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500"
            >
              Frequently Asked Questions!
            </h1>
            <p className="text-zinc-300 w-[30rem]">
              Before submitting the form, you can find quick answers to some
              Frequently Asked Question below and save your time.
            </p>
          </div>
        </div>
      </div>

      <div className="w-auto flex flex-col gap-12 justify-center py-12 items-center">
        <div className="w-auto px-4 gap-4 flex flex-col justify-center ">
          <h1 className="text-zinc-400 font-bold">General Questions</h1>
          <div className="flex gap-4 justify-center">
            <AccordinCards />
            <AccordinCards />
          </div>
        </div>
        <div className="w-auto px-4 gap-4 flex flex-col  justify-center ">
          <h1 className="text-zinc-400 font-bold">Payment Related Questions</h1>
          <div className="flex gap-4 justify-center">
            <AccordinCards />
            <AccordinCards />
          </div>
          <div>
            <QuestonCard />
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default page;
