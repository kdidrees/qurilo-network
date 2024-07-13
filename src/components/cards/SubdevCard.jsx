import React from "react";
import { subdevData } from "../../data/subDevelopment";

export default function Subdev() {
  return (
    <>
      <>
        <div className="bg-white md:ml-0 ml-8">
          <div className="container px-6 py-10 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {subdevData.map((data) => {
                return (
                  <>
                    <div className="space-y-12">
                      <div className="md:flex md:items-start md:-mx-4">
                        <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-0 dark:text-white dark:bg-blue-500">
                          <img src={data.icon} alt="" />
                        </span>
                        <div className="mt-4 md:mx-4 md:mt-0">
                          <h1 className="text-2xl font-semibold font-sans text-gray-700 capitalize dark:text-white">
                            {data.heading}
                          </h1>
                          <p className="mt-3 text-gray-500 font-sans dark:text-gray-300">
                            {data.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
