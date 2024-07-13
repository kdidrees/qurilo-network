import React from "react";
import headerimg from "../assets/Images/headerimg.png";
import bannermobile from "../assets/Images/bannermobile.jpg";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import heromobile from "../assets/Images/appdevelopment/images/heromobile.jpg";
import Button from "./buttons/Button";

const NetworkHero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
            <div className="text-left md:mx-0 mx-6">
              <div className="md:mx-20">
                <h1 className="md:text-6xl font-sans xl:w-1/2 w-full leading-10 text-3xl font-bold mb-6">
                  Custom Application Development Services
                </h1>

                <p className="text-xl font-sans mb-12 lg:w-1/2 w-full ">
                  Our ERP implementation process begins with a thorough
                  assessment of your business processes and requirements. We
                  analyze existing workflows, identify pain points, and map out
                  a tailored ERP solution to streamline operations and enhance
                  efficiency across departments.
                </p>
                <Button data={"Get Free Consultation"} />
              </div>
            </div>

           
          </div>
        </div>
      </section>
    </>
  );
};

export default NetworkHero;
