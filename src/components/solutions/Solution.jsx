import React from "react";
import SolTagLine from "./SolTagline";
import SolPara from "./SolPara";
import Award from "./Award";

export default function Solution() {
  return (
    <>
      <div className="w-full bg-white lg:flex mb-10 lg:mt-10 ">
        <div className="m-5 ml-8 lg:w-1/2">
          <SolTagLine />
          <SolPara />
        </div>
        <div className="ml-8 lg:w-1/2 lg:mt-8 lg:mb-20 ">
          <Award />
        </div>
      </div>
    </>
  );
}