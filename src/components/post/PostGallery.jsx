import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

export default function PostGallery({ images }) {
  const [thumbs, setThumbs] = useState(null);
  if (!images?.length) return null;

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Thumbs, FreeMode]}
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
        className="overflow-hidden rounded-md bg-muted [--swiper-navigation-color:#fff] [--swiper-pagination-color:#fff]"
      >
        {images.map((image) => (
          <SwiperSlide key={image.url}>
            <img src={image.url} alt={image.alt} className="h-80 w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      {images.length > 1 && (
        <Swiper
          onSwiper={setThumbs}
          spaceBetween={8}
          slidesPerView={5}
          watchSlidesProgress
          modules={[Thumbs, FreeMode]}
          className="mt-3 h-16"
        >
          {images.map((image) => (
            <SwiperSlide key={`${image.url}-thumb`} className="opacity-60 [&.swiper-slide-thumb-active]:opacity-100">
              <img src={image.url} alt="" className="h-16 w-full rounded object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
