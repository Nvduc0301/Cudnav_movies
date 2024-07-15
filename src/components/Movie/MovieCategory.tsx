import React, { FC, useRef } from 'react';
import { Link } from "react-router-dom";

// import { Link } from "react-scroll";
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import {Movie} from "../../types"

import MovieCard from './MovieCard';

type MovieCategoryProps = {
  movies: Movie[];
  title?: string;
  pathAll?: string;
  slidesPerView?: number;
};

const MovieCategory: FC<MovieCategoryProps> = React.memo((props) => {
  const { title, movies, pathAll, slidesPerView = 4 } = props;
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex items-center justify-between mb-6 mt-12">
        <h3 className="text-2xl md:text-3xl font-extrabold ">{title}</h3>
        <div className="flex items-center rounded-full border-2 border-white/10 text-white">
          <button
            className="px-3 py-1.5 bg-primary"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaAngleLeft />
          </button>
          <span className="w-0.5 h-6 rounded bg-white/10" />
          <button
            className="px-3 py-1.5 bg-primary"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
      <Swiper
        className='h-full'
        // autoplay={true} 
        // loop={true}
        onBeforeInit={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            spaceBetween: 15,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          640: {
            spaceBetween: 20,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            spaceBetween: 25,
            slidesPerView: 4,
            slidesPerGroup: slidesPerView,
          },
        }}
      >
        {movies.map((item, index) => (
          <SwiperSlide key={index}>
            <MovieCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {pathAll && (
        <Link
          to={pathAll}
          className="flex items-center px-5 py-2 border-2 border-primary w-max mx-auto mt-8 hover:bg-primary duration-150 hover:text-[#fff] font-bold text-[#fff]"
        >
          Xem Tất Cả
        </Link>
      )}
    </div>
  );
});

export default MovieCategory;
