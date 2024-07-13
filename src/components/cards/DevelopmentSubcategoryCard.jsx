import React from "react";

export default function DevelopmentSubcategoryCard({ image, title, des }) {
  return (
    <>
      <div class="p-7 rounded-xl bg-white hover:bg-second   hover:border-none  border-[1px]  shadow-sm">
        <img src={image} alt={title} className="w-16 h-16 object-cover mb-5" />
        <h3 class="md:text-xl text-black  font-bold font-sans mb-7">
          {title}

          <p className="border-[1px] mt-5 border-blue-900 border-blue hover:border-white"></p>
        </h3>

        <p class="font-medium leading-7 font-sans text-gray-500 mb-6 dark:text-gray-400">
          {des}
        </p>
      </div>
    </>
  );
}
