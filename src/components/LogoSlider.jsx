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

  return (
    <>
      <div className="py-12">
        l
        <Swiper
          slidesPerView={isMobile ? 1 : 4}
          spaceBetween={30}
          autoplay={true}
          loop={true}
          style={{
            display: "flex",
            justifyContent: "",
          }}
          speed={1200}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          // pagination={{
          //   clickable: true,
          // }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          
          <SwiperSlide>
            <img src={azurelogo} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={oraclelogo} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={awslogo} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={ibmlogo} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={oraclelogo} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
