import React from "react";

const TitleHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-4xl font-bold text-absolute-white">{title}</h3>
      <p className="text-lg  text-gray-60">{description}</p>
    </div>
  );
};

export default TitleHeader;
