import React from "react";
import { FaArrowRightLong, FaRegComment } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";

const QuestonCard = () => {
  const data = [
    {
      id: 1,
      icon: <FaRegComment />,
      header: "Still Require Assistance?",
      desc: "Can't find the answer here?  Message us for help! We're Always happy to help our Lovely Customers.",
      button: "Contact Us",
    },
    {
      id: 2,
      icon: <GoQuestion />,
      header: "Check Out All FAQs!",
      desc: "You may wanna check out our all FAQs page, as we answer some common inquiries there, so It's worth taking a quick look there.",
      button: "Visit FAQs",
    },
  ];

  return (
    <>
      <div className="flex gap-4 items-center justify-evenly mt-8">
        {data.map((val) => {
          return (
            <div key={val.id} className="border bg-zinc-900/70 gap-8 flex flex-col w-[35rem] py-4 px-4 rounded-lg border-zinc-600">
              <div className="text-xl border rounded-lg p-2 border-zinc-600 w-fit ">{val.icon}</div>
              <div>
                <h1 className="text-2xl font-medium">{val.header}</h1>
                <h1 className="text-zinc-400 w-[34rem]">{val.desc}</h1>
              </div>
              <div
                className="flex cursor-pointer bg-emerald-300 font-semibold w-fit px-4 py-2 rounded-md text-black items-center gap-2"
              >
                <button>{val.button}</button>
                <FaArrowRightLong />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QuestonCard;
