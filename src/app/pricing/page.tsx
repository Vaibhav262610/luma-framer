"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { FaArrowRightLong, FaRegStar } from "react-icons/fa6";
import CourseBenifits from "@/components/CourseBenifits";
import FrequentlyAsked from "@/components/FrequentlyAsked";

const Page = () => {
  const [billing, setBlling] = useState(false);

  const pricingData = [
    {
      id: 1,
      data: "Basic",
      yearlyPrice: "149",
      price: "29",
      desc: "Basic Plan gives you access to all our current & future courses with active subscription.",
      item1: "✔️ Access All Courses",
      item2: "✔️ Unlimited Access",
      item3: "✔️ Access Future Courses",
      item4: "✔️ Low Priority Support",
      item5: "❌ Access Courses Early",
      item6: "❌ Access Members only Courses ",
    },
    {
      id: 2,
      data: "pro",
      yearlyPrice: "350",
      price: "59",
      desc: "Gain access to all current and future courses, with early access to upcoming courses.",
      item1: "✔️ Access All Courses",
      item2: "✔️ Unlimited Access",
      item3: "✔️ Access Future Courses",
      item4: "✔️ Low Priority Support",
      item5: "✔️ Access Courses Early",
      item6: "❌ Access Members only Courses ",
    },
    {
      id: 3,
      data: "premium",
      yearlyPrice: "560",
      price: "89",
      desc: "Get early access to all current and future courses, exclusive Members-only content.",
      item1: "✔️ Access All Courses",
      item2: "✔️ Unlimited Access",
      item3: "✔️ Access Future Courses",
      item4: "✔️ Low Priority Support",
      item5: "✔️ Access Courses Early",
      item6: "✔️ Access Members only Courses ",
    },
  ];

  const yearly = "Yearly";
  const monthly = "Month";

  return (
    <>
      <Navbar />
      <div className="h-fit flex-col pt-48 w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-1 w-auto ">
          <h1 className="text-sm tracking-wider uppercase w-fit font-bold text-emerald-300">
            GET ACCESS TO ALL COURSES
          </h1>
          <h1 className="text-4xl  sm:text-[3rem] tracking-tight sm:text-left text-center  font-black w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
            Get All Access Pass Today!
          </h1>
          <h1 className="text-sm sm:text-lg w-11/12 sm:text-left text-center sm:w-8/12 leading-loose text-zinc-400">
            Join today and get discounted access to all our courses. With our
            All Access Pass, you&apos;ll have early access to courses and
            exclusive VIP content for members.
          </h1>
          <div className="flex justify-between sm:gap-0 gap-10 py-12">
            <div className="flex gap-1 items-center">
              <FaRegStar className="text-sm sm:text-xl text-emerald-300" />
              <h1 className="text-sm sm:text-md text-zinc-200">
                Save 50% when billed yearly!
              </h1>
            </div>
            <div className="text-white flex gap-1  items-center">
              <Switch
                onClick={() => setBlling(!billing)}
                className={`${billing ? "bg-green-300 " : "bg-gray-600"} `}
              />
              {billing ? (
                <h1 className="text-sm sm:text-lg font-medium">
                  Billed Yearly{" "}
                </h1>
              ) : (
                <h1 className="text-sm sm:text-lg font-medium">
                  Billed Monthly
                </h1>
              )}
            </div>
          </div>
          <div className="flex items-center flex-col flex-wrap sm:flex-row justify-center gap-8">
            {pricingData.map((val) => {
              return (
                <div
                  key={val.id}
                  className="border bg-zinc-900/70 border-zinc-600 rounded-lg p-6 w-fit"
                >
                  <h1 className="text-gray-200 text-md uppercase font-medium ">
                    {val.data}
                  </h1>
                  <h1 className="text-3xl sm:text-4xl text-white font-semibold">
                    $ {billing ? val.yearlyPrice : val.price} /{" "}
                    {billing ? yearly : monthly}
                  </h1>
                  <h2 className="text-sm sm:text-md text-zinc-400 w-[18rem] sm:w-[21rem]">
                    {val.desc}
                  </h2>
                  <div className="my-6 sm:my-12 border-t w-52 border-zinc-700"></div>
                  <ul className="flex gap-3 flex-col">
                    <li className="text-sm sm:text-md text-zinc-400">
                      {val.item1}
                    </li>
                    <li className="text-sm sm:text-md text-zinc-400">
                      {val.item2}
                    </li>
                    <li className="text-sm sm:text-md text-zinc-400">
                      {val.item3}
                    </li>
                    <li className="text-sm sm:text-md text-zinc-400">
                      {val.item4}
                    </li>
                    <li className="text-sm sm:text-md text-zinc-600">
                      {val.item5}
                    </li>
                    <li className="text-sm sm:text-md text-zinc-600">
                      {val.item6}
                    </li>
                  </ul>
                  <div className="flex mt-8 cursor-pointer bg-emerald-400 font-semibold w-auto gap-28 justify-end px-4 py-3 rounded-md text-black items-center ">
                    <button>Join Today</button>
                    <FaArrowRightLong />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CourseBenifits />
      <FrequentlyAsked />
      <Footer />
    </>
  );
};

export default Page;
