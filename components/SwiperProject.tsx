import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaBootstrap, FaSass,FaHtml5,FaCss3Alt,FaReact    } from "react-icons/fa";

import { SiNextdotjs, SiNextui, SiMongodb, SiFirebase,SiFramer  } from "react-icons/si";
import Link from "next/link";
import { AppProps } from "next/app";

const CardProjects = ({
  nextjs,
  nextui,
  bootstrap,
  sass,
  mongodb,
  firebase,
  html,
  css,
  framerMotion,
  reactNative,
  javascript,
}: any) => {
  return (
    <Swiper
      direction="horizontal"
      className="mySwiper align-middle"
      slidesPerView={5}
      rewind={true}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
      style={{}}
    >
      {nextjs ? (
        <SwiperSlide className="logoswiper">
          <div className="flex justify-center">
            <SiNextdotjs size={"30%"} />
          </div>
        </SwiperSlide>
      ) : (
        <></>
      )}
      {nextui ? (
        <SwiperSlide className="logoswiper">
          <div className="flex justify-center">
            <SiNextui size={"30%"}/>
          </div>
        </SwiperSlide>
      ) : (
        <></>
      )}
      {bootstrap ? (
        <SwiperSlide className="logoswiper">
          <div className="flex justify-center">
            <FaBootstrap size={"30%"}/>
          </div>
        </SwiperSlide>
      ) : (
        <></>
      )}
      {sass ? (
        <SwiperSlide className="logoswiper">
          <div className="flex justify-center">
            <FaSass size={"30%"} />
          </div>
        </SwiperSlide>
      ) : (
        <></>
      )}
      {mongodb ? (
        <SwiperSlide className="logoswiper">
          <div className="flex justify-center">
            <SiMongodb size={"30%"} />
          </div>
        </SwiperSlide>
      ) : (
        <></>
      )}
      {firebase ? (
        <SwiperSlide className="logoswiper">
          <div className="flex justify-center">
            <SiFirebase size={"30%"} />
          </div>
        </SwiperSlide>
      ) : (
        <></>
      )}
      {html ? (
        <SwiperSlide className="logoswiper flex-shrink">
          <div className="flex justify-center">
            <FaHtml5 size={"25%"} />
          </div>
        </SwiperSlide>
      ) : (
        <></>
      )}
      {css ? (
        <SwiperSlide className="logoswiper">
          <div className="flex justify-center">
            <FaCss3Alt size={"25%"} />
          </div>
        </SwiperSlide>
      ) : (
        <></>
      )}
      {framerMotion ? (
        <SwiperSlide className="logoswiper">
          <div className="flex justify-center align-middle">
            <SiFramer  size={"30%"} />
          </div>
        </SwiperSlide>
      ) : (
        <></>
      )}
      {reactNative ? (
        <SwiperSlide className="logoswiper">
          <div className="flex justify-center align-middle">
            <FaReact  size={"30%"} />
          </div>
        </SwiperSlide>
      ) : (
        <></>
      )}
    </Swiper>
  );
};

export default CardProjects;
