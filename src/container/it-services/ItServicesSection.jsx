import React from "react";
import industryimg from "../../assets/Images/industry/images/atmimg.png";
import { industryPageData } from "../../data/ItServices";
import Industry from "../../components/industrypagecomp/IndustryToggle";

export default function ItServicesSection() {
  return (
    <section>
      {industryPageData.map((item, index) => (
        <div
          key={index}
          className={`w-full bg-white lg:flex mb-10 lg:mt-4 ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="m-5 ml-8 lg:w-1/2">
            <img src={item.img} alt={item.heading} />
          </div>
          <div className="ml-8 lg:w-1/2 lg:mt-16 lg:mb-20">
            <Industry data={[item]} />
          </div>
        </div>
      ))}
    </section>
  );
}
