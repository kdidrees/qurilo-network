import React from "react";
import headerimg from "../assets/Images/headerimg.png";
import bannermobile from "../assets/Images/bannermobile.jpg";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import heromobile from "../assets/Images/appdevelopment/images/heromobile.jpg";
import Button from "./buttons/Button";

const NetworkHero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const test =
    "https://img.freepik.com/premium-photo/silhouette-person-working-late-night-neonlit-room-cybersecurity-expert-modern-office-setting-focus-digital-screens-ai_372197-15733.jpg?size=626&ext=jpg";
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  return (
    <>
      <section
        className="relative bg-cover md:h-screen  bg-center py-32 w-full"
        style={{
          backgroundImage: `url(${isMobile ? heromobile : headerimg})`,
        }}
      >
        <div className="container right-0 md:mt-12 text-left text-white relative z-10 ">
          <div className="flex items-center relative">
            <div className="md:text-left text-center">
              <div className="md:mx-20">
                <h1 className="md:text-6xl font-sans text-3xl font-bold mb-6">
                  Custom Application Development Services
                </h1>

                <p className="text-xl font-sans mb-12 md:w-1/2 w-full ">
                  Our ERP implementation process begins with a thorough
                  assessment of your business processes and requirements. We
                  analyze existing workflows, identify pain points, and map out
                  a tailored ERP solution to streamline operations and enhance
                  efficiency across departments.
                </p>
                <Button data={"Get Free Consultation"} />
              </div>
            </div>

            {/* <>
              <div className="md:block hidden  ">
                <div>
                  <button className="cursor-auto group font-sans relative h-16 w-56 overflow-hidden  rounded-l-2xl bg-white text-lg font-bold text-purple">
                    Implementation
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                  </button>
                </div>
                <div>
                  <button className="group cursor-auto font-sans mt-4 relative h-16 w-56 overflow-hidden rounded-l-2xl bg-white text-lg font-bold text-purple">
                    Implementation
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                  </button>
                </div>
                <div>
                  <button className="group cursor-auto font-sans relative mt-4 h-16 w-56 overflow-hidden rounded-l-2xl bg-white text-lg font-bold text-purple">
                    Implementation
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                  </button>
                </div>
              </div>
            </> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default NetworkHero;
