import React, { useState } from "react";
import TitleHeader from "../TitleHeader";
import ButtonCta from "../ButtonCta";
import FaqItem from "./FaqItem";

const FAQ = [
  {
    id: 1,
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    id: 2,
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    id: 3,
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    id: 4,
    question: "How can I watch StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    id: 5,
    question: "How do I sign up for StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    id: 6,
    question: "What is the StreamVibe free trial?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    id: 7,
    question: "How do I contact StreamVibe customer support?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    id: 8,
    question: "What are the StreamVibe payment methods?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
];

const leftColumn = FAQ.slice(0, 4);
const rightColumn = FAQ.slice(4, 8);
const Faq = () => {
  const [openId, setIsOpenId] = useState(null);
  const toggle = (id) => setIsOpenId(openId === id ? null : id);
  return (
    <div className="flex w-full flex-col gap-20">
      <div className="flex items-center justify-between">
        <TitleHeader
          title={"Frequently Asked Questions"}
          description={
            "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          }
        />
        <ButtonCta>Ask A Question</ButtonCta>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap items-center md:gap-20 ">
        <div className="w-full sm:w-1/2">
          {leftColumn.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggle={() => toggle(item.id)}
            />
          ))}
        </div>
        <div className="w-full sm:w-1/2">
          {rightColumn.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
