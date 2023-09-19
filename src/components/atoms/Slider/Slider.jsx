import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';

// //style 
import style from "./Slider.module.scss"
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

const Slider = ({cardImage}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
                    <img src={i.image.url} alt={i.image.alt} className="object-cover w-full rounded h-60 lg:h-96"/>
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
                            <img src={i.image.url} alt={i.image.alt} className="object-cover w-full h-10 rounded lg:h-20"/>
                        </SwiperSlide>))
                    }
            </Swiper>
        </>
    );
};

export default Slider;

