import React from "react";

const ServicesCard = ({cardData}) => {
  return (
    <>
      {cardData.map((card) => {
        return (
          <>
            <div key={card.id}>
              <div class="p-7 rounded-xl bg-white hover:bg-second   hover:border-none  border-[1px]  shadow-sm">
                <h3 class="md:text-xl text-black  font-bold font-sans mb-7">
                  {card.heading}

                  <p className="border-[1px] mt-5 border-blue-900 border-blue hover:border-white"></p>
                </h3>

                <p class="font-medium leading-7 font-sans text-gray-500 mb-6 dark:text-gray-400">
                  {card.description}
                </p>
                <div class="py-3 pt-6 cursor-pointer flex items-center text-black underline justify-end w-full font-normal rounded-md bg-transparent  transition-all duration-500  ">
                  Know More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class=" h-5 w-5 ms-3"
                  >
                    <path
                      fill="#000"
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

export default ServicesCard;
