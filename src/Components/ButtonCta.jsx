import React from "react";

const ButtonCta = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="flex items-center gap-2 px-6 py-4 text-sm rounded-lg cursor-pointer lg:text-lg bg-red-45 text-absolute-white"
    >
      {children}
    </button>
  );
};

export default ButtonCta;
