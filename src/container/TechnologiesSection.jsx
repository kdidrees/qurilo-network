import React from "react";
// import Heading from "../buttons/Heading";
import TechnologyCard from "../components/cards/TechnologyCard";
import { technologiesData } from "../data/applicationDevelopment";
import Heading from "../components/heading/Heading";

const TechnologiesSection = () => {
  return (
    <section className="bg-white">
      <Heading
        title={`Technologies We Rely On`}
        desc={`We are proud to have a team of web application developers who are
        experts in diverse web technologies like MERN, Blockchain, Kentico, etc.
        Our web app development specialists hold relevant knowledge about the
        following core technologies:`}
      />
   

      <div className="flex flex-col items-center px-6 lg:px-20 py-16 gap-10 lg:gap-20">
        {/* <Heading heading="CRM Technologies We Use" /> */}

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          {technologiesData.map((tech, i) => (
            <TechnologyCard key={i} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechnologiesSection;
