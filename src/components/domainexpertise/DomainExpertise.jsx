import React from "react";
import { domainExpertiseData } from "../../data/subDevelopment";
import { FaRegHandPointRight } from "react-icons/fa";

export default function DomainExpertise() {
  return (
    <>
      <>
        <section className="bg-[#f6f6f6] py-16">
          {/* put heading here */}

          <div className="text-left mx-8 w-11/12   md:mt-8 mt-4 ">
            <h2
              className="
                  font-semibold
                  text-2xl
                  font-sans
                  md:text-3xl
                  text-black
                  mb-4 
                  md:mt-0 mt-8
                  "
            >
              Our Domain Expertise
            </h2>
            <p className="text-base text-[#3e3e3e] text-body-color font-sans">
              Being custom web development India company, Codeflies has a
              massive expertise of working in varied business environments. We
              efficiently use .NET & PHP/OpenSource platform with MVC framework
              for developing new web application possibilities.
            </p>
          </div>

          <div className="relative  flex   flex-col md:flex-row items-center md:mt-4">
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
                              className="flex items-center  pr-12"
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
        </section>
      </>
    </>
  );
}
