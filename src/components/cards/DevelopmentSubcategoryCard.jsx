import React from "react";


export default function DevelopmentSubcategoryCard({ image, title, des }) {
  return (
    <>
      <div>
        <div class="p-7 h-full rounded-xl bg-white hover:bg-second transition-all ease-in-out duration-100  border-[1px]  shadow-sm">
          <div className="">
            <img
              src={image}
              alt={title}
              className="w-16 h-16 object-cover mb-5"
            />
            <h3 class="md:text-xl text-black  font-bold font-sans mb-7">
              {title}
              <p className="border-[1px] mt-5 border-bgColor-100"></p>
            </h3>
          </div>
          <p class="font-medium leading-7 font-sans text-gray-500 mb-6 dark:text-gray-400">
            {des}
          </p>
        </div>
      </div>
    </>
  );
}
