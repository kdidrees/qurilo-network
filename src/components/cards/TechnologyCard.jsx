import React from "react";
const TechnologyCard = ({ tech }) => {
  return (
    <div className=" h-full flex flex-col gap-5 py-10 border-b-[1px] border-blue">
      <h1 className="text-xl font-semibold font-sans text-white ">{tech.heading}</h1>
      <div className="w-full h-[2px] bg-blue rounded-md"></div>
      <div className="flex gap-5 flex-wrap">
        {tech.tech?.map((techUsed, i) => (
          <p className="border-2  font-sans border-white hover:bg-lightColor-100 bg-white hover:bg-second py-2 px-4 rounded-md cursor-pointer h-fit">
            {techUsed}
          </p>
        ))}
      </div>
    </div>
  );
};
export default TechnologyCard;