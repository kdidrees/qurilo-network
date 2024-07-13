import React from "react";
// import { icon } from "../../assets/pages/itService/icons/doneicons.png";
import doneicon from "../../assets/Images/subappdev/solutions/images/check.png";
const SolPara = () => {
  const listItems = [
    "India's Top 1% Software Talent",
    "Trusted by Startups to Fortune 500",
    "Idea to Deployment, We Handle All",
    "Time-Zone Friendly: Global Presence",
    "Top-tier Data Security Protocols",
    "On-time Delivery, No Surprises",
  ];
  return (
    <div className="mt-5 lg:ml-10">
      <p className="text-base text-[#3e3e3e] text-body-color font-sans">
        We are a prominent cloud computing services provider, serving various
        technological needs, from startups and large enterprises to product
        firms, digital agencies, SMEs, and government bodies.
      </p>
      <p className="text-base text-[#3e3e3e] text-body-color font-sans mt-5">
        Our unwavering dedication places us at the forefront of the industry.
        Our experts provide competitive, high-quality cloud solutions.
      </p>
      <ul className="text-base mt-5 flex flex-col gap-4 text-gray-500">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-base text-[#3e3e3e] text-body-color font-sans">
            {/* <IoCheckmarkDoneCircle className="text-blue" /> */}
            <img src={doneicon} alt="" className="h-4 w-4 " />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SolPara;