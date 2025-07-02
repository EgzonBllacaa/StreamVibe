import React from "react";
import CipLoader from "react-spinner";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <ClipLoader color="#fff" size={50} />
    </div>
  );
};

export default Spinner;
