import React from "react";
import ServicesCard from "../components/cards/ServicesCard";
import { cardData } from "../data/applicationDevelopment";
import Heading from "../components/heading/Heading";

export default function DevelopmentServices() {
  return (
    <>
      <section>
        <div className="flex flex-wrap  -mx-4 md:mt-16">
          <div className="w-full px-4">
            <Heading
              title={`Your Vision, Our Application Expertise`}
              desc={` We specialize in delivering result-driven custom app development
                services and innovative mobile app solutions tailored for
                startups and enterprises. Our expertise ensures applications
                that exceed expectations, empowering your business for success
                in today’s dynamic digital landscape`}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-20  md:grid-cols-3 mx-16 ">
          <ServicesCard cardData={cardData} />
        </div>
      </section>
    </>
  );
}
