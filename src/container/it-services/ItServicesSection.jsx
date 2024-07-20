import React from "react";
import { SolutionsPageData } from "../../data/Solutions";
import ItServices from "../../components/it-services/ItServices";
import { useMediaQuery } from "react-responsive";
import Heading  from "../../components/heading/Heading"

export default function ItServicesSection() {
  const isTab = useMediaQuery({ maxWidth: 1024 });

  return (
    <section className="lg:mx-20">
     <div className="py-8">
     <Heading title={SolutionsPageData.heading} desc={SolutionsPageData.desc} />
     </div>
      {SolutionsPageData.list.map((item, index) => (
        <div
          key={index}
          className={`w-full bg-white lg:flex justify-between mb-10 lg:mt-8 ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="md:m-8 m-2">
            <img
              src={item.img}
              width={isTab ? 900 : 550}
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
