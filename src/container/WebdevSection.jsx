import React from "react";
import Subdev from "../components/subdev/Subdev";
import strategyimg from "../assets/Images/subappdev/subdev/images/strategy.png";
import DevelopmentSubcategoryCard from "../components/cards/DevelopmentSubcategoryCard";
import { subdevData } from "../data/subDevelopment";
import Heading from "../components/heading/Heading";

export default function WebdevSection() {
  return (
    <>
      <section className="">
        <div className="md:mt-10 mt-6 lg:ml-10 mx-8 md:mx-16">
          <h2
            className=" font-semibold
                  text-2xl
                  font-sans
                  md:text-3xl
                  text-black
                  mb-4 
                  md:mt-0 mt-8"
          >
            Web Development
          </h2>
          <div className="mt-5 ">
            <p className="text-base text-desc text-body-color font-sans md:w-3/4">
              We are a prominent cloud computing services provider, serving
              various technological needs, from startups and large enterprises
              to product firms, digital agencies, SMEs, and government bodies.
              Our unwavering dedication places us at the forefront of the
              industry. Our experts provide competitive, high-quality cloud
              solutions.
            </p>
          </div>
        </div>
        <div className="lg:flex hidden justify-center  bg-white">
          <img src={strategyimg} className="" alt="" />
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-6  md:grid-cols-2 lg:grid-cols-3 md:mx-16 mx-8">
          {subdevData.map((data, index) => {
            return (
              <>
                <DevelopmentSubcategoryCard
                  key={index}
                  image={data.icon}
                  title={data.heading}
                  des={data.desc}
                />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
