import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`flex w-full justify-center text-center items-center gap-2 px-6 py-4 rounded-lg cursor-pointer bg-black-08 text-absolute-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
