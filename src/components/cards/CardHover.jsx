import React from "react";
import "./Card.css";
import startupicon from "../../assets/Images/appdevelopment/icons/startupicon.webp"

export default function CardHover() {
  return (
    <>
      <div className="relative w-72 h-[23.5rem] rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br transform translate3d-0 scale-[0.95] blur-3xl z-[-1]"></div>
        <div className="card shadow-sm relative w-full h-full overflow-hidden rounded-lg">
          <div
            style={{
              backgroundImage: `url(${"https://www.valuecoders.com/wp-content/uploads/2024/07/Startups.png"})`,
              backgroundRepeat: "no-repeat",
            }}
            className={` img-content flex items-start hi   w-full h-full bg-gradient-to-br  transition-transform duration-600`}
          >
            <img src={startupicon} alt="" className="p-4" />
          
          </div>
          
          <div className="content absolute top-0 left-0 flex flex-col mt-6  w-full h-full gap-2 p-5 text-center rounded opacity-0 pointer-events-none translate-y-12 transition-all duration-600 cubic-bezier[0.23,1,0.32,1]">
            <p className="md:text-2xl  text-left font-bold font-sans text-gray-700">Startups</p>
            <p className="text-left mt-4 md:text-base font-sans text-gray-500 ">
              Accelerate your startup’s growth with tailor-made eCommerce
              solutions designed to streamline operations and scale your
              business effectively.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
