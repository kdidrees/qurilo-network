import React from "react";
import networkheroimg from "../assets/Images/networkHeroImg.png";

const NetworkHero = () => {
  return (
    <>
      <div className="h-screen bg-gray-50 flex items-center">
        <section
          className="relative bg-cover h-screen bg-center py-32 w-full"
          style={{
            backgroundImage: `url(${networkheroimg})`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#350428] to-[#383838] opacity-75"></div>

          <div className="container mx-auto text-left text-white relative z-10">
            <div className="flex items-center">
              <div className="">
                <h1 className="text-5xl font-medium mb-6">
                  Network Management
                </h1>
                <p className="text-xl mb-12">
                  Our ERP implementation process begins with a thorough
                  assessment of your business processes and requirements. We
                  analyze existing workflows, identify pain points, and map out
                  a tailored ERP solution to streamline operations and enhance
                  efficiency across departments.
                </p>
                <a
                  href="#"
                  className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
                >
                  Book Now
                </a>
              </div>
              <div className="pl-16">
                <div>
                  <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-purple text-lg font-bold text-white">
                    Implementation
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                  </button>
                </div>
                <div>
                  <button className="group mt-4 relative h-12 w-48 overflow-hidden rounded-2xl bg-purple text-lg font-bold text-white">
                    Implementation
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                  </button>
                </div>
                <div>
                  <button className="group relative mt-4 h-12 w-48 overflow-hidden rounded-2xl bg-purple text-lg font-bold text-white">
                    Implementation
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NetworkHero;
