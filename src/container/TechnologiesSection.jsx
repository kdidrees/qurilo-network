import React from "react";
// import Heading from "../buttons/Heading";
import TechnologyCard from "../components/cards/TechnologyCard";
import { technologiesData } from "../data/applicationDevelopment";

const TechnologiesSection = () => {
  return (
    <section className="bg-black">
      <div className=" text-white  md:text-3xl text-xl md:mt-6 mt-4 md:pt-16 pt-4 font-sans font-semibold text-center">
        Technologies We Rely On
      </div>

      <p className="text-center md:mt-4 mt-2 md:mx-44 mx-6 font-sans text-white">
        We are proud to have a team of web application developers who are
        experts in diverse web technologies like MERN, Blockchain, Kentico, etc.
        Our web app development specialists hold relevant knowledge about the
        following core technologies:
      </p>

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
