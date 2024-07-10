import React from "react";
import Appdevcard from "../components/Card";
import { cardData } from "../data/applicationDevelopment";

export default function DevelopmentServices() {
  return (
    <>
      <div className="flex flex-wrap -mx-4 md:mt-16">
        <div className="w-full px-4">
          <div className="text-center  mx-24 mb-12 lg:mb-20 ">
            <h2
              className="
                  font-semibold
                  text-2xl
                  font-sans
                  md:text-3xl
                  text-black
                  mb-4
                  "
            >
              Your Vision, Our Application Expertise
            </h2>
            <p className="text-base text-[#666666] text-body-color font-sans">
              We specialize in delivering result-driven custom app development
              services and innovative mobile app solutions tailored for startups
              and enterprises. Our expertise ensures applications that exceed
              expectations, empowering your business for success in today’s
              dynamic digital landscape
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-4 md:grid-cols-3 mx-16">
        <Appdevcard cardData={cardData} />
      </div>
    </>
  );
}


