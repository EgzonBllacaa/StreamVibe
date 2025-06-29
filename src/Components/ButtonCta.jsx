import React from "react";

const ButtonCta = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="flex items-center gap-2 px-6 py-4 rounded-lg cursor-pointer bg-red-45 text-absolute-white"
    >
      {children}
    </button>
  );
};

export default ButtonCta;
