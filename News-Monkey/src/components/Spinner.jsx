import React from "react";
import Loading from "./Loading.gif";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img src={Loading} alt="Spinner" />
    </div>
  );
};

export default Spinner;
