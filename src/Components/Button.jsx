import React from "react";

const Button = ({ children }) => {
  return (
    <button className="flex items-center gap-2 px-6 py-4 rounded-lg cursor-pointer bg-black-08 text-absolute-white">
      {children}
    </button>
  );
};

export default Button;
