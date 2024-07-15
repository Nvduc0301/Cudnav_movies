import React from "react";
import { Link } from "react-scroll";
import { FaCirclePlay, FaCalendarDays } from "react-icons/fa6";
import { UpdateDataItem } from '@/types';

interface MovieBannerProps {
  data: UpdateDataItem;
}

const MovieBanner: React.FC<MovieBannerProps> = ({ data }) => {
  return (
    <div className="w-full text-[#fff] z-10">
      <img
        className="w-full h-full aspect-[2/1] object-cover opacity-50"
        src={data.poster_url}
        alt={data.slug}
      />
      <div className="absolute left-5 top-3/4 -translate-y-3/4 ">
        <h3 className="text-5xl mb-5 duration-150  font-bold">
          {data.name}
        </h3>
        <div className="flex items-center gap-5">
          <Link
            to=""
            className="flex items-center gap-2 p-4 border-2 border-primary rounded-3xl border-solid hover:bg-primary-light  hover:text-[#333] "
          >
            <FaCirclePlay className="" />
            Xem ngay
          </Link>
          <div className="flex items-center gap-2 p-4 border-2 border-primary rounded-3xl border-solid hover:bg-primary-light  hover:text-[#333] ">
            <FaCalendarDays className=""/>
            <span className="">{data.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieBanner
