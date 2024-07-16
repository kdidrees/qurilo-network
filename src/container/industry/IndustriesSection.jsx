import React from "react";
import IndustryToggle from "../../components/industrypagecomp/IndustryToggle";
import industryimg from "../../assets/Images/industry/images/atmimg.png";
import { industryToggleData } from "../../data/industrypage";

export default function IndustriesSection() {
  return (
    <section>
      {industryToggleData.map((item, index) => (
        <div
          key={index}
          className={`w-full bg-white lg:flex mb-10 lg:mt-4 ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="m-5 ml-8 lg:w-1/2">
            <div className="mt-10 lg:ml-10 pb-6">
              <h2 className="font-semibold text-2xl font-sans md:text-3xl text-black mb-4 md:mt-0 mt-8">
                {item.heading}
              </h2>
            </div>
            <div>
              <img src={industryimg} alt="" />
            </div>
          </div>
          <div className="ml-8 lg:w-1/2 lg:mt-16 lg:mb-20">
            <IndustryToggle data={[item]} />
          </div>
        </div>
      ))}
    </section>
  );
}
