import React from "react";
import bgimg from "../assets/Images/whychoose/bgimg.png";

export default function Whychoose() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgimg})` }}
        className={` bg-cover bg-center bg-no-repeat w-full h-[24rem]`}
      >
        <div className="ms-20 pt-[14rem]">
          {" "}
          <h2 className="text-white text-3xl font-semibold">
            Need a Consultation ?
          </h2>
          <button className="bg-[rgba(110,8,84,1)] text-white rounded-lg text-lg font-medium mt-5 px-8 py-3">
            Book a Demo
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mt-20 lg:px-20 md:px-10 px-5 justify-between">
        <div className="lg:w-[35%] w-[95%] mx-auto">
          <h2 className="text-5xl pr-3 leading-[64px] font-semibold">
            Why Choose Qurilo Solutions ?
          </h2>
          <p className="text-[17px] mt-7 font-normal">
            At Qurilo, we specialize in delivering transformative IT services,
            innovative development solutions, and strategic business consulting.
            With extensive industry expertise and a commitment to innovation, we
            tailor our solutions precisely to your business objectives. What
            sets us apart is our client-centric approach—we prioritize your
            success by forging collaborative partnerships and providing
            personalized service.
          </p>
          <button className="bg-[rgba(110,8,84,1)] text-white rounded-lg text-lg font-medium my-5 px-8 py-3">
            Book a Demo
          </button>
        </div>
        <div className="flex lg:w-[56%] w-[95%] mx-auto">
          <div className="pr-5 mt-[10rem]">
            <div className="flex mb-2 gap-x-4 items-center">
              {/* <div className="w-9 h-8"><img src="/images/whychoose1.png"/></div> */}
              <h3 className="text-lg font-medium"> innovative approach</h3>
            </div>

            <p className="md:ms-[3.5rem] pb-2">
              Qurilo integrates cutting-edge technologies and innovative
              practices to deliver forward-thinking solutions that give clients
              a competitive edge.
            </p>

            <div className="h-[1px] w-full bg-[rgba(0,0,0,1)] "></div>
            <div>
              <div className="flex my-2 gap-x-4 items-center">
                {/* <div className="w-9 h-8"><img src="/images/whychoose2.png"/></div> */}
                <h3 className="text-lg font-medium"> Client-Centric Focus</h3>
              </div>

              <p className="md:ms-[3.5rem] pb-2">
                Qurilo integrates cutting-edge technologies and innovative
                practices to deliver forward-thinking solutions that give
                clients a competitive edge.
              </p>
            </div>
            <div className="h-[1px] w-full bg-[rgba(0,0,0,1)] "></div>
          </div>
          <div className="w-[1px] md:h-[34rem] h-[45rem] bg-[rgba(0,0,0,1)]"></div>
          <div className="ms-8">
            <div className="flex my-2 gap-x-4 items-center">
              {/* <div className="w-9 h-8"><img src="/images/whychoose3.png"/></div> */}
              <h3 className="text-lg font-medium"> Quality Assurance</h3>
            </div>

            <p className="md:ms-[3.5rem] pb-2">
              Qurilo integrates cutting-edge technologies and innovative
              practices to deliver forward-thinking solutions that give clients
              a competitive edge.
            </p>

            <div className="h-[1px] w-full bg-[rgba(0,0,0,1)] "></div>
            <div>
              <div className="flex my-2 gap-x-4 items-center">
                {/* <div className="w-9 h-8"><img src="/images/whychoose4.png"/></div> */}
                <h3 className="text-lg font-medium">Long Term Partnership</h3>
              </div>

              <p className="md:ms-[3.5rem] pb-2">
                Qurilo integrates cutting-edge technologies and innovative
                practices to deliver forward-thinking solutions that give
                clients a competitive edge.
              </p>
            </div>
            <div className="h-[1px] w-full bg-[rgba(0,0,0,1)] "></div>
          </div>
        </div>
      </div>
    </>
  );
}
