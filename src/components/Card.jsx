import React from "react";

const Appdevcard = (cardData) => {
  return (
    <>
      {cardData.cardData.map((card) => {
        return (
          <>
            <div key={card.id}>
              <div class="p-7 rounded-xl bg-white hover:border-purple border-[0.1px]  shadow-md">
                <h3 class="text-xl font-semibold font-sans mb-7">
                  {card.heading}
                </h3>
                <p class="font-medium leading-7 font-sans text-gray-500 mb-6 dark:text-gray-400">
                 {card.description}
                </p>
                <div
                
                  class="py-3 flex items-center text-gray-600  justify-end w-full font-normal rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500  "
                >
                  Know More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class=" h-5 w-5 ms-3"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Appdevcard;
