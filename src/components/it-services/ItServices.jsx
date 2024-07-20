import React from "react";

export default function Industry({ data }) {
  return (
    <>
      {data.map((ele, index) => {
        return (
          <div
            key={index}
            className={`max-w-screen-xl mx-auto px-5 bg-white`}
          >
            <div className="flex flex-col items-left md:ml-12 lg:ml-20 ">
              <h2 className="font-semibold text-2xl text-left  font-sans md:text-3xl text-black mb-4 md:mt-0 mt-8">
                {ele.heading}
              </h2>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto  ">
              <div className="py-3">
                <p className="font-medium   font-sans text-gray-500 py-4 dark:text-gray-400 border-b-[1px]  border-text-primary-500  mt-1">
                  {ele.desc}
                </p>

                <div className="invisible my-6"></div>

                {ele.data.map((heading) => {
                  return (
                    <div className="border-b-[1px] border-gray-400 pb-2 pt-4  w-96">
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
