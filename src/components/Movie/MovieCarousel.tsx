import React, { FC, useRef, useEffect } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


import { UpdateDataItem } from '@/types';
import MovieBanner from "./MovieBanner";

interface MovieCarouselProps {
  data: UpdateDataItem[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ data }) => {

  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative w-full">
        {/* <button
          className="px-3 py-1.5 bg-primary absolute left-5 top-1/2 -translate-y-1/2 z-10"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaAngleLeft />
        </button> */}
        <Swiper
          className="h-full"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade]}
          onBeforeInit={(swiper: any) => {
            swiperRef.current = swiper;
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <MovieBanner data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <button
          className="px-3 py-1.5 bg-primary absolute right-5 top-1/2 -translate-y-1/2 z-10"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaAngleRight />
        </button> */}
      </div>
    </div>
  );
};

export default MovieCarousel;
