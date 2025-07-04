import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FaqItem = ({ item, isOpen, toggle }) => {
  return (
    <>
      <div
        key={item.id}
        onClick={toggle}
        className="flex items-start gap-5 p-9"
      >
        <span className="p-5 font-medium border rounded-lg bg-black-12 border-black-12 text-absolute-white">
          0{item.id}
        </span>
        <div className="flex  items-start  justify-between w-full">
          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-medium text-absolute-white">
              {item.question}
            </h4>

            {isOpen && <p className="text-lg text-gray-60">{item.answer}</p>}
          </div>
          <span>
            {isOpen ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </span>
        </div>
      </div>
      <div className="my-gradient"></div>
    </>
  );
};

export default FaqItem;
