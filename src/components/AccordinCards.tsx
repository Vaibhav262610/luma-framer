import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordinCards = () => {
  const data = [
    {
      id: 1,
      question: "Can I access the Courses on multiple devices?  ",
      answer:
        "Yes, you can access the Courses on multiple devices such as desktops, laptops, tablets, and smartphone.",
    },
    {
      id: 2,
      question: "Can I interact with instructos?",
      answer:
        "Yes, you can access the Courses on multiple devices such as desktops, laptops, tablets, and smartphone.",
    },
    {
      id: 3,
      question: "Can I access the Courses offline?  ",
      answer:
        "Yes, you can access the Courses on multiple devices such as desktops, laptops, tablets, and smartphone.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-3">
        {data.map((val) => {
          return (
            <div
              key={val.id}
              className=" border rounded-xl py-1 bg-gradient-to-r from-gray-100/5 to-black border-zinc-700 w-[35rem] px-8 "
            >
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-white">
                    {val.question}
                  </AccordionTrigger>
                  <hr className="border-zinc-700" />
                  <AccordionContent className="mt-4 text-zinc-400 text-md">
                    {val.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AccordinCards;
