"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      id: 1,
      title: "Courses",
      link: "/courses",
    },
    {
      id: 2,
      title: "Pricing",
      link: "/pricing",
    },
    {
      id: 3,
      title: "Contact & Support",
      link: "/contact",
    },
    {
      id: 4,
      title: "About",
      link: "/about",
    },
  ];

  return (
    <>
      <div className="flex z-[99] fixed w-full justify-center pb-[0.4px] bg-zinc-900/30 backdrop-blur border-zinc-700 border-b">
        <div className="nav flex items-center w-full px-6 xl:max-w-[70%] justify-between  py-3">
          <Link href="/">
            <div className="">
              <Image
                height={40}
                width={40}
                src="https://framerusercontent.com/images/FKwdEG0CCsTEKv5Fy5ueyuvq3BE.svg"
                alt=""
              />
            </div>
          </Link>
          <div className="">
            <ul className="lg:flex hidden items-center justify-center gap-8">
              {navItems.map((val) => {
                const activeLink = pathname == val.link;
                return (
                  <div key={val.id}>
                    <Link href={val.link}>
                      <motion.li
                        whileTap={{ scale: 0.9 }}
                        className={`${
                          activeLink
                            ? "border border-zinc-600 px-1 py-1 bg-zinc-700/30 rounded-lg"
                            : ""
                        } flex  gap-2 items-center cursor-pointer`}
                      >
                        <p
                          className={`${
                            activeLink ? "text-white/70" : "text-zinc-700"
                          }  border  text-xs px-[0.5rem] py-[0.1rem]  font-semibold  rounded-md  border-zinc-700`}
                        >
                          {val.id}
                        </p>
                        <h1
                          className={`  tracking-tight font-medium ${
                            activeLink ? "text-white" : "text-zinc-500 "
                          }`}
                        >
                          {val.title}
                        </h1>
                      </motion.li>
                    </Link>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="flex gap-5">
            <div className="flex bg-gradient-to-r from-black  to-white/10 border-[1px] border-zinc-700 rounded-md cursor-pointer items-center gap-2 px-[6px] py-1 ">
              <p className="border-2 text-xs px-[0.4rem] py-[0.1rem] text-zinc-500 font-semibold rounded-md  border-zinc-700">
                L
              </p>
              <button className="pr-2 text-white font-medium">Login</button>
            </div>
            <div className="border-2 flex items-center text-xl px-[0.4rem] py-[0.1rem] text-white font-semibold rounded-md  border-zinc-700">
              <IoReorderThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
