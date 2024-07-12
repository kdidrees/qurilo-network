import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

import SliderPrev from "./SliderPrev";
import SliderNext from "./SliderNext";

import styles from "./Industries.Module.css";
// import useScreenWidth from "../customHook/useScreenWidth";
import { IoMdArrowRoundForward } from "react-icons/io";

// import images here
import industriesone from "../../assets/Images/appdevelopment/Industries/Images/industries1.jpg";
import industriestwo from "../../assets/Images/appdevelopment/Industries/Images/industries2.jpg";
import industriesthree from "../../assets/Images/appdevelopment/Industries/Images/industries3.jpg";
import industriesfour from "../../assets/Images/appdevelopment/Industries/Images/industries4.jpg";
import industriesfive from "../../assets/Images/appdevelopment/Industries/Images/industries5.png";
import industriessix from "../../assets/Images/appdevelopment/Industries/Images/industries6.png";
import { useMediaQuery } from "react-responsive"; 

const Industries = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTab = useMediaQuery({ maxWidth: 1024 });

  const [activeIndex, setActiveIndex] = useState(0);

  const [backgroundImage, setBackgroundImage] = useState(industriesthree);

  const handleMouseEnter = (imageUrl) => {
    setBackgroundImage(imageUrl);
  };

  const handleMouseLeave = () => {
    setBackgroundImage(cards[activeIndex].imageUrl);
  };

  const cards = [
    {
      id: 0,
      title: "Retail & E-commerce",
      content:
        "Scalable B2B and B2C solutions to take your business to the next level.",
      imageUrl: industriesthree,
    },
    {
      id: 1,
      title: "Non-Profit & Education",
      content:
        "Empowering non-profits with innovative tech solutions for greater impact.",
      imageUrl: industriesfour,
    },
    {
      id: 2,
      title: "Manufacturing , Automotive & Chemicals",
      content: "Empowering manufacturers with scalable and agile solutions.",
      imageUrl: industriesfive,
    },
    {
      id: 3,
      title: "Pharma & Healthcare",
      content:
        "Enhancing patient care with advanced pharma and healthcare solutions",
      imageUrl: industriesone,
    },

    {
      id: 4,
      title: "Travel , logistics & Hospitality",
      content: "Revolutionizing travel with cutting-edge digital solutions.",
      imageUrl: industriestwo,
    },
    {
      id: 5,
      title: "FinTech , Banking & Financial Services",
      content:
        "Innovative solutions for modern banking and financial services.",
      imageUrl: industriessix,
    },
  ];

  return (
    <div>
      <div
        className="w-full relative h-[35rem]   hover:opacity-1 "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-blue-900 opacity-90"> */}
        <h2 className="absolute text-[76px]  md:text-[98px] text-blue opacity-50 font-bold top-11 left-6  ">
          Industries
        </h2>
        <Swiper
          initialSlide={0}
          modules={[Navigation]}
          allowTouchMove
          spaceBetween={0}
          slidesPerView={`${isMobile ? 1 : isTab?2:4}`}
        >
          <SliderPrev
            setBackgroundImage={setBackgroundImage}
            setActiveIndex={setActiveIndex}
            cards={cards}
          />
          <SliderNext />

          {cards.map((card) => (
            <SwiperSlide className=" w-1/4  !mr-0" key={card.id}>
              <div
                className={`${
                  styles.card
                }  group py-4 h-[35rem] cursor-pointer ${
                  isMobile && "border-none"
                } border-r-[1px] border-white `}
                onMouseEnter={() => handleMouseEnter(card.imageUrl)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <div
                  className={`flex h-full items-end ${styles.cardContentContainer}`}
                >
                  <div className="flex flex-col px-4  card-content">  
                    <div
                      className={`text-2xl hover:text-blue   font-semibold text-white  ${
                        activeIndex === card.id
                          ? `${styles.activeCardTitle}`
                          : `${styles.cardTitle}`
                      } `}
                    >
                      {card.title}
                    </div>
                    <div
                      className={`group-hover:border-b-4    ${
                        activeIndex === card.id
                          ? `border-b-4 ${styles.activeTitleBorder}`
                          : `${styles.titleBorder}`
                      }  border-blue my-2 w-[20%]`}
                    ></div>

                    <div
                      className={` mt-2   group-hover:visible ${
                        activeIndex === card.id
                          ? `h-[10rem]  opacity-1 ${styles.activeCardDescription}  `
                          : `invisible ${styles.cardDescription}  h-[4rem] opacity-0 group-hover:h-[10rem]`
                      } `}
                    >
                      <div className="text-[18px] text-white font-medium ">
                        {card.content}
                      </div>
                      <div className="text-blue flex items-center gap-x-2 text-lg font-medium underline-offset-2 underline card-button">
                        Learn More{" "}
                        <IoMdArrowRoundForward className="text-blue" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Industries;
