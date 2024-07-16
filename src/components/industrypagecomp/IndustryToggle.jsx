import React from "react";

export default function IndustryToggle({ data }) {
  return (
    <>
      {data.map((ele) => {
        return (
          <div
            key={ele.id}
            className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen"
          >
            <div className="flex flex-col items-left lg:ml-12 ">
              <h2 className="font-semibold text-2xl text-left  font-sans md:text-3xl text-black mb-4 md:mt-0 mt-8">
                {ele.heading}
              </h2>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto  ">
              <div className="py-3">
                <p className="font-medium  font-sans text-gray-500 mb-6 dark:text-gray-400  mt-3">
                  {ele.desc}
                </p>
                {ele.data.map((heading) => {
                  return (
                  <div className="border-b-[1px] border-gray-400 pb-4 mt-2">
                      <h3 key={heading} className="font-medium">
                      {heading}
                    </h3>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
