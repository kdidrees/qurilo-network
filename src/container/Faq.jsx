import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { HiMinus } from "react-icons/hi";
import { faqData } from "../data/applicationDevelopment";
import Heading from "../components/heading/Heading";
import parse from "html-react-parser";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="my-10 md:mt-24">
      <Heading title={faqData.heading} desc={faqData.desc} />

      <div className="mt-10 lg:w-[72%] md:w-[90%] w-[93%] mx-auto">
        {faqData.faqdata.map((item, index) => {
          return (
            <div key={index}>
              <div
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex justify-between items-center md:py-7 py-3  cursor-pointer"
              >
                <h2 className="md:text-xl text-[16px] w-[96%] font-normal">
                  {item.question}
                </h2>
                {activeIndex === index ? (
                  <HiMinus size={25} className="text-blue font-bold" />
                ) : (
                  <IoMdAdd size={25} className="text-blue font-bold" />
                )}
              </div>

              {activeIndex === index && (
                <div className="pb-4 text-lg font-normal text-gray-600">
                  <p>{parse(item.answer)}</p>
                  <ul className="mt-2">
                    {item.list?.map((listItem, index) => {
                      return (
                        <div key={index} className="flex gap-x-4 items-center">
                          <div className="w-2 h-2 bg-blue rounded-full"></div>
                          <li>{parse(listItem)}</li>
                        </div>
                      );
                    })}

                    {item.ansList?.map((listItem, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col font-sans gap-x-4 items-start"
                        >
                          <div className=" py-4 rounded-full font-bold">
                            {parse(listItem.heading)}
                          </div>
                          <li>{parse(listItem.desc)}</li>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              )}
              {index !== faqData.length - 1 && (
                <div className="w-[100%] h-[1px] bg-gray-300"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
