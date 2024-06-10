import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import swiperData from "../data/swiperData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
const SwiperView = () => {
    return (
        <Swiper
            effect={"fade"}
            modules={[Autoplay, EffectFade]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {swiperData.map((swiper, index) => {
                return (
                    <SwiperSlide key={index}>
                        <img src={process.env.PUBLIC_URL + `${swiper.img}`} alt="" />
                        <h1>
                            {swiper.title} <span>{swiper.engTitle}</span>
                        </h1>
                        <p>{swiper.period}</p>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SwiperView;
