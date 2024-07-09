import React from "react";

export default function Features() {
  const servicesData = [
    {
      id: 1,
      img: "",
      heading: "Integrated Process",
      desc: `  Our ERP solutions cater to diverse industries including
                        manufacturing, retail, healthcare, and services. We`,
    },
    {
      id: 2,
      img: "",
      heading: "Integrated Process",
      desc: `  Our ERP solutions cater to diverse industries including
                        manufacturing, retail, healthcare, and services. We`,
    },
    {
      id: 3,
      img: "",
      heading: "Integrated Process",
      desc: `  Our ERP solutions cater to diverse industries including
                        manufacturing, retail, healthcare, and services. We`,
    },
    {
      id: 4,
      img: "",
      heading: "Integrated Process",
      desc: `  Our ERP solutions cater to diverse industries including
                        manufacturing, retail, healthcare, and services. We`,
    },
  ];

  return (
    <>
      <section className="bg-networkbg dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex items-center justify-center w-full mt-6 px-28">
            <div className="flex-grow border-t border-black"></div>
            <span className="px-28 text-2xl text-black md:text-5xl z-20  font-sans">
              Features
            </span>
            <div className="flex-grow border-t border-black"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {servicesData.map((service) => {
              return (
                <>
                  <div
                    key={service.id}
                    className="lg:flex bg-white p-5 rounded-2xl"
                  >
                    <img
                      className="object-cover w-full h-56 rounded-lg lg:w-64"
                      src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />
                    <div className="flex flex-col justify-end lg:mx-6 px-2 md:pt-0 pt-12">
                      <h2 className="text-xl font-semibold text-gray-800  dark:text-white ">
                        {service.heading}
                      </h2>
                      <p className="text-sm md:mt-6 mt-4 mb-4 text-gray-500 dark:text-gray-300">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
