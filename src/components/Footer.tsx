import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const data = [
    {
      id: 1,
      header: "Navigate",
      item1: "Courses",
      item2: "Browse By Category",
      item3: "All Access Pas",
      item4: "Login",
    },
    {
      id: 2,
      header: "Company",
      item1: "About Us",
      item2: "Contact & Support",
      item3: "Wall of Love",
    },
    {
      id: 3,
      header: "Misc",
      item1: "Privacy Policy",
      item2: "FAQs",
      item3: "Waitlist",
    },
  ];

  return (
    <>
      <div className="flex sm:px-0 justify-center items-center w-full">
        <div className="h-[90vh]  border-t-2 border-zinc-800 gap-16  flex-col justify-center items-center min-w-[70%]  flex">
          <div className="flex md:flex-row flex-col justify-evenly w-full">
            <div className=" flex sm:px-0 px-2 flex-col gap-3">
              <img
                src="https://framerusercontent.com/images/FKwdEG0CCsTEKv5Fy5ueyuvq3BE.svg"
                height={45}
                width={45}
                alt=""
              />
              <h1 className="text-md text-zinc-300 w-auto sm:w-[25rem]">
                Luma is a powerful Membership Template to Sell your Courses and
                Membership Content.
              </h1>
              <div className="flex gap-2 items-center">
                <CiFacebook className=" text-white text-xl" />
                <AiOutlineYoutube className=" text-white text-xl" />
                <FaXTwitter className=" text-white " />
              </div>
            </div>
            <div className="flex  flex-col gap-12">
              <div className="flex flex-col gap-3 border py-6 px-4 border-zinc-800 rounded-lg w-auto sm:w-[35rem]">
                <h1 className="text-3xl sm:text-4xl font-medium text-zinc-200">
                  Stay Up-to-Date!
                </h1>
                <h2 className="text-md text-zinc-300 w-auto sm:w-[30rem]">
                  Subscribe to our Newsletter to stay up-to-date on latest
                  courses, updates, news and discounts from us.
                </h2>
                <div className="border py-1 px-2 rounded-lg w-fit bg-gradient-to-r from-zinc-900/10  to-white/15  border-zinc-700">
                  <input
                    type="text"
                    className="w-auto sm:w-[20rem] pl-2 text-lg text-zinc-900 bg-transparent font-normal"
                    placeholder="Email Address"
                  />
                  <button className="bg-zinc-700 text-white py-3 px-7 rounded-lg font-bold">
                    Join Now
                  </button>
                </div>
              </div>
              <div className="flex sm:px-0 px-2 sm:flex-row flex-col">
                <div className="flex gap-12">
                  {data.map((val) => {
                    return (
                      <div key={val.id}>
                        <h1 className="font-semibold text-zinc-100">
                          {val.header}
                        </h1>
                        <ul className="flex flex-col gap-3 text-zinc-400 font-medium mt-5">
                          <li>{val.item1}</li>
                          <li>{val.item2}</li>
                          <li>{val.item3}</li>
                          <li>{val.item4}</li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full items-center">
        <div className="flex md:flex-row flex-col justify-between pb-12 max-w-[80%] min-w-[50%]">
          <div className="flex md:flex-row flex-col  md:items-center md:gap-8">
            <div className="text-sm">
              <h1 className="text-zinc-400">
                Copyright © 2024 - Luma Template for{" "}
                <span className="text-white font-bold">Framer</span>
              </h1>
            </div>
            <div className="flex items-center md:justify-center">
              <img
                src="https://framerusercontent.com/images/ecT4HOsJsAC5wRImCJCESdYwQI.png"
                alt=""
                height={15}
                width={15}
              />
              <h1 className="text-zinc-400 text-sm">Powered by FramerAuth</h1>
            </div>
          </div>
          <div>
            <h1 className="text-zinc-400 text-sm">
              Made 💖 by{" "}
              <span className="font-bold text-white">Vaibhav Rajpoot</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
