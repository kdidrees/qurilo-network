import React from "react";
import { industryPageData } from "../../data/ItServices";
import ItServices from "../../components/it-services/ItServices";
import { useMediaQuery } from "react-responsive";

export default function ItServicesSection() {
  const isTab = useMediaQuery({ maxWidth: 1024 });

  return (
    <section>
      {industryPageData.map((item, index) => (
        <div
          key={index}
          className={`w-full bg-white lg:flex justify-between mb-10 lg:mt-4 ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="md:m-8 m-2">
            <img
              src={item.img}
              width={isTab ? 1000 : 600}
              alt={item.heading}
              className="rounded-xl"
            />
          </div>
          <div className="ml-0 lg:w-1/2 lg:mt-16 lg:mb-20">
            <ItServices data={[item]} />
          </div>
        </div>
      ))}
    </section>
  );
}
