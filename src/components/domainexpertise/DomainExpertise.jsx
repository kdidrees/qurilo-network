import React from "react";
import { domainExpertiseData } from "../../data/subDevelopment";
import { FaRegHandPointRight } from "react-icons/fa";

export default function DomainExpertise() {
  return (
    <>
      <>
        <section className="bg-[#f6f6f6] py-16">
          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div className="relative block flex   flex-col md:flex-row items-center">
              {domainExpertiseData.map((data) => {
                return (
                  <>
                  
                        <div key={data.id} className="flex flex-wrap mt-3 px-6">
                          <ul className="bg-white p-8 shadow-xl">
                            {data.heading.map((options) => {
                              return (
                                <>
                                  <li
                                    key={options}
                                    className="flex items-center"
                                  >
                                    <div className=" rounded-full p-2 fill-current text-blue">
                                      <FaRegHandPointRight />
                                    </div>
                                    <span className="text-black font-bold font-sans text-lg  ml-3">
                                      {options}
                                    </span>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        </div>
                  
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </>
    </>
  );
}
