import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import azurelogo from "../assets/Images/logoslider/azurelogo.png";
import awslogo from "../assets/Images/logoslider/awslogo.png";
import ibmlogo from "../assets/Images/logoslider/ibmlogo.png";
import oraclelogo from "../assets/Images/logoslider/oraclelogo.png";

export default function LogoSlider() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const sliderData = [
    {
      id: 1,
      img: azurelogo,
    },
    {
      id: 1,
      img: awslogo,
    },
    {
      id: 3,
      img: ibmlogo,
    },
    {
      id: 4,
      img: oraclelogo,
    },
    {
      id: 5,
      img: awslogo,
    },
  ];

  return (
    <>
      <div className="py-12">
        <Swiper
          slidesPerView={isMobile ? 1 : 4}
          spaceBetween={30}
          autoplay={true}
          loop={true}
          style={{
            display: "flex",
            justifyContent: "",
          }}
          speed={2000}
          autoplay={{
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          // pagination={{
          //   clickable: true,
          // }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          {sliderData.map((slider) => {
            return (
              <>
                <SwiperSlide style={{display:'flex', justifyContent:'center'}} key={slider.id}>
                  <img src={slider.img} />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
