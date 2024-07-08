import React from "react";
import networkheroimg from "../assets/Images/networkHeroImg.png";

const NetworkHero = () => {
  return (
    <>
      <div className="h-screen bg-gray-50 flex items-center">
        <section
          className="relative bg-cover h-screen  bg-center py-32 w-full"
          style={{
            backgroundImage: `url(${networkheroimg})`,
          }}
        >
        {/* Gradient Overlay */}
        <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(53, 4, 40, 1) 0%, rgba(53, 4, 40, 0.8) 30%, rgba(53, 4, 40, 0.6) 50%, rgba(53, 4, 40, 0.4) 70%, rgba(53, 4, 40, 0.2) 85%, rgba(53, 4, 40, 0) 100%)",
                height: "100%",
              }}
            ></div>
          </div>

          <div className="container mx-auto text-left text-white relative z-10">
            <div className="flex items-center">
              <div className="">
                <div className=" ">
                  <h1 className="md:text-5xl text-3xl font-medium mb-6">
                    Network Management
                  </h1>
                  <p className="text-xl mb-12">
                    Our ERP implementation process begins with a thorough
                    assessment of your business processes and requirements. We
                    analyze existing workflows, identify pain points, and map
                    out a tailored ERP solution to streamline operations and
                    enhance efficiency across departments.
                  </p>
                  <button className="bg-white text-purple py-4 px-12 rounded-lg ">
                    Book Now
                  </button>
                </div>
              </div>
              <div className=" md:block hidden pl-16">
                <div>
                  <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-white text-lg font-bold text-purple">
                    Implementation
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                  </button>
                </div>
                <div>
                  <button className="group mt-4 relative h-12 w-48 overflow-hidden rounded-2xl bg-white text-lg font-bold text-purple">
                    Implementation
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                  </button>
                </div>
                <div>
                  <button className="group relative mt-4 h-12 w-48 overflow-hidden rounded-2xl bg-white text-lg font-bold text-purple">
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
