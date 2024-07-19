import React from "react";
import { industryPageData } from "../../data/ItServices";
import ItServices from "../../components/it-services/ItServices";

export default function ItServicesSection() {
  return (
    <section>
      {industryPageData.map((item, index) => (
        <div
          key={index}
          className={`w-full bg-white lg:flex justify-between mb-10 lg:mt-4 ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="m-8">
            <img src={item.img} width={600} alt={item.heading} className="rounded-xl" />
          </div>
          <div className="ml-0 lg:w-1/2 lg:mt-16 lg:mb-20">
          <ItServices data={[item]} />
          </div>
        </div>
      ))}
    </section>
  );
}
