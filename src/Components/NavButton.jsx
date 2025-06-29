import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavButton = ({ to, label }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <button
      onClick={() => navigate(to)}
      className={`cursor-pointer px-6 py-3.5 ${
        isActive ? "bg-black-10 text-absolute-white  rounded" : ""
      } `}
    >
      {label}
    </button>
  );
};

export default NavButton;
