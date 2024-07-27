"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { easeOut, motion, AnimatePresence } from "framer-motion";
import { IoReorderThree } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Opacity } from "@tsparticles/engine";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

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
      <div className="flex z-[99]  fixed w-full justify-center pb-[0.4px] bg-zinc-900/30 backdrop-blur border-zinc-700 border-b">
        <div className="flex items-center w-full px-6 xl:max-w-[70%] justify-between py-3">
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
            {menu ? (
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
            ) : (
              <>
                <AnimatePresence>
                  <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    animate={{
                      backgroundColor: "black",
                      x: 0,
                      opacity: 1,
                    }}
                    exit={{ x: 500, opacity: 0 }}
                    
                    transition={{ duration: 0.3, ease: easeOut }}
                    className="absolute top-0 left-0 z-[20] bg-black w-full h-screen flex flex-col items-center justify-center gap-8"
                  >
                    <div
                      onClick={() => setMenu(!menu)}
                      className="absolute top-4 right-6 border-2 lg:hidden flex items-center text-xl p-2 text-white font-semibold rounded-md  border-zinc-700"
                    >
                      <RxCross1 className="text-sm" />
                    </div>
                    {navItems.map((val) => {
                      const activeLink = pathname == val.link;
                      return (
                        <div key={val.id}>
                          <Link href={val.link}>
                            <motion.p
                              animate={{ y: -30, opacity: [0, 1] }}
                              transition={{ ease: "easeOut", duration: 0.6 }}
                              whileTap={{ scale: 0.9 }}
                              className={`${
                                activeLink
                                  ? "border border-zinc-600 px-1 py-1 bg-zinc-700/30 rounded-lg"
                                  : ""
                              } flex  gap-2 items-center cursor-pointer`}
                            >
                              <h1
                                className={`  tracking-tight font-medium text-3xl ${
                                  activeLink ? "text-white" : "text-white "
                                }`}
                              >
                                {val.title}
                              </h1>
                            </motion.p>
                          </Link>
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </>
            )}
          </div>
          <div className="flex gap-2">
            <div className="flex bg-gradient-to-r from-black  to-white/10 border-[1px] border-zinc-700 rounded-md cursor-pointer items-center gap-2 px-[6px] py-1 ">
              <p className="border-2 text-xs px-[0.4rem] py-[0.1rem] text-zinc-500 font-semibold rounded-md  border-zinc-700">
                L
              </p>
              <button className="pr-2 text-white font-medium">Login</button>
            </div>
            <div
              onClick={() => setMenu(!menu)}
              className="border-2 lg:hidden flex items-center text-xl px-[0.4rem] py-[0.1rem] text-white font-semibold rounded-md  border-zinc-700"
            >
              {menu ? <IoReorderThree /> : <RxCross1 className="text-sm" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
