import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';

// img
import notPhoto from 'src/assets/images/notPhoto.png'

// //style 
import style from "./style.module.scss"
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

interface CardImage {
  image: {
    url: string;
    alt: string;
  };
}

interface SliderProps {
  cardImage: CardImage[];
}

const Slider: React.FC<SliderProps> = ({ cardImage }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState< any >(null);

    return (
        <>
            <Swiper
            modules={[Navigation, Pagination, Thumbs, FreeMode]}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className={style.swiper}
            >
                {cardImage?.map((i, index) => (
                <SwiperSlide key={index}>
                    <img src={i?.image?.url ? i?.image?.url : notPhoto} alt={i?.image?.alt ? i?.image?.alt : "not photo"} className="object-cover w-full rounded h-60 lg:h-96"/>
                </SwiperSlide>))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView={6}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mt-4 h-20"
                >
                    {cardImage?.map((i, index) => (
                        <SwiperSlide key={index}>
                            <img src={i?.image?.url ? i?.image?.url : notPhoto} alt={i?.image?.alt ? i?.image?.alt : "not photo"} className="object-cover w-full h-10 rounded lg:h-20"/>
                        </SwiperSlide>))
                    }
            </Swiper>
        </>
    );
};

export default Slider;