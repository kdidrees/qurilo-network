import React from "react";
import assessmentlogo from "../assets/Images/assesmenticon.png";
import customizationlogo from "../assets/Images/customization.png";
import implementationicon from "../assets/Images/implementationicon.png";
import supporticon from "../assets/Images/supporticon.png";

export default function Implementation() {
  const cardData = [
    {
      id: 1,
      img: implementationicon,
      heading: "Implementation",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin turpis orci, maximus sed purus a, cursus scelerisque
                    purus. Morbi molestie, odio at sagittis rhoncus, felis massa
                    iaculis mi, quis molestie erat ipsum vel risus.`,
    },
    {
      id: 2,
      img: assessmentlogo,
      heading: "Assessment",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin turpis orci, maximus sed purus a, cursus scelerisque
                    purus. Morbi molestie, odio at sagittis rhoncus, felis massa
                    iaculis mi, quis molestie erat ipsum vel risus.`,
    },
    {
      id: 3,
      img: customizationlogo,
      heading: "Customization",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin turpis orci, maximus sed purus a, cursus scelerisque
                    purus. Morbi molestie, odio at sagittis rhoncus, felis massa
                    iaculis mi, quis molestie erat ipsum vel risus.`,
    },
    {
      id: 4,
      img: supporticon,
      heading: "Support",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin turpis orci, maximus sed purus a, cursus scelerisque
                    purus. Morbi molestie, odio at sagittis rhoncus,
                  `,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center flex-wrap py-20 bg-networkbg">
        {cardData.map((card) => {
          return (
            <>
              <div
                key={card.id}
                className="relative w-full  group max-w-md min-w-0 mx-4 mt-20 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-xs rounded-xl"
                style={{ height: "20rem" }}
              >
                <div className="pb-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="flex justify-center w-full">
                      <div className="relative">
                        <img
                          width={120}
                          src={card.img}
                          className="dark:shadow-xl  border-white dark:border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 text-center">
                    <h3 className="mb-1 pt-6 font-sans text-2xl font-bold leading-normal text-black dark:text-gray-300">
                      {card.heading}
                    </h3>
                  </div>
                  <div className=" mx-6 mt-4 text-center  border-gray-200 dark:border-gray-700/50">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full px-6">
                        <p
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            // whiteSpace: "nowrap",
                          }}
                          className="mb-4 font-sans text-[14px]  font-light leading-relaxed text-black dark:text-gray-400"
                        >
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
