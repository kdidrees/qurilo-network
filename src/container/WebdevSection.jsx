import React from "react";
import Subdev from "../components/subdev/Subdev";
import strategyimg from "../assets/Images/subappdev/subdev/images/strategy.png";
import DevelopmentSubcategoryCard from "../components/cards/DevelopmentSubcategoryCard";
import { subdevData } from "../data/subDevelopment";

export default function WebdevSection() {
  return (
    <>
      <section className="">
        <div className="lg:flex hidden justify-center bg-black ">
          <img src={strategyimg} className="bg-black" alt="" />
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-20  md:grid-cols-3 mx-16 ">
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
