import React from "react";
const TechnologyCard = ({ tech }) => {
  return (
    <div className=" h-full flex flex-col gap-5 py-10 border-b-[1px] border-black">
      <h1 className="text-xl font-semibold font-sans ">{tech.heading}</h1>
      <div className="w-full h-1 bg-black rounded-md"></div>
      <div className="flex gap-5 flex-wrap">
        {tech.tech?.map((techUsed, i) => (
          <p className="border-2  font-sans border-lightColor-100 hover:bg-lightColor-100 hover:bg-fourth  py-2 px-4 rounded-md cursor-pointer h-fit">
            {techUsed}
          </p>
        ))}
      </div>
    </div>
  );
};
export default TechnologyCard;