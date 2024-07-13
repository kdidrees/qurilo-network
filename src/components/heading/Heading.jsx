import React from "react";

export default function Heading({ title,desc }) {
  return (
    <>
       <div className="text-center  lg:mx-44 mx-8 md:mt-8 mt-4 ">
              <h2
                className="
                  font-semibold
                  text-2xl
                  font-sans
                  md:text-3xl
                  text-black
                  mb-4 
                  md:mt-0 mt-8
                  "
              >
                {title}
              </h2>
              <p className="text-base text-desc text-body-color font-sans">
               {desc}
              </p>
            </div>
    </>
  );
}