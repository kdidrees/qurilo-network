import React from "react";

export default function IndustryToggle({ data }) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col items-left lg:ml-12 md:mt-12 mt-4">
          <h2 className="text-black text-xl md:mt-6 mt-3">
            Fintech, Banking, Financial Services
          </h2>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          {data.map((item) => (
            <div key={item.heading} className="py-3">
              <h3 className="font-medium">
                {item.heading}
              </h3>
              <p className="font-medium  font-sans text-gray-500 mb-6 dark:text-gray-400  mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
