import React from "react";

export default function Implementation() {
  const cardData = [
    {
      id: 1,
      img: "https://randomuser.me/api/portraits/men/15.jpg",
      heading: "Implementation",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin turpis orci, maximus sed purus a, cursus scelerisque
                    purus. Morbi molestie, odio at sagittis rhoncus, felis massa
                    iaculis mi, quis molestie erat ipsum vel risus.`,
    },
    {
      id: 2,
      img: "https://randomuser.me/api/portraits/men/15.jpg",
      heading: "Implementation",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin turpis orci, maximus sed purus a, cursus scelerisque
                    purus. Morbi molestie, odio at sagittis rhoncus, felis massa
                    iaculis mi, quis molestie erat ipsum vel risus.`,
    },
    {
      id: 3,
      img: "https://randomuser.me/api/portraits/men/15.jpg",
      heading: "Implementation",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin turpis orci, maximus sed purus a, cursus scelerisque
                    purus. Morbi molestie, odio at sagittis rhoncus, felis massa
                    iaculis mi, quis molestie erat ipsum vel risus.`,
    },
    {
      id: 4,
      img: "https://randomuser.me/api/portraits/men/15.jpg",
      heading: "Implementation",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin turpis orci, maximus sed purus a, cursus scelerisque
                    purus. Morbi molestie, odio at sagittis rhoncus, felis massa
                    iaculis mi, quis molestie erat ipsum vel risus.`,
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
                className="relative w-full group max-w-md min-w-0 mx-4 mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-xs rounded-xl"
              >
                <div className="pb-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="flex justify-center w-28">
                      <div className="relative">
                        <img
                          src={card.img}
                          className="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 mt-20 text-center">
                    <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">
                      {card.heading}
                    </h3>
                  </div>
                  <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full px-6">
                        <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
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
