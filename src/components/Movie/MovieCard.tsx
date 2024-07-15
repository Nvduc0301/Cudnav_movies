import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "@/types";

type MovieCardProps = {
  item: Movie;
};

export default function MovieCard({ item }: MovieCardProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/phim/${item.slug}`);
  };

  return (
    <div onClick={handleClick} className="h-full">
      <div className="relative h-full overflow-hidden">
        <img
          className="w-full h-full aspect-[2/3] rounded-sm object-cover hover:scale-125 transition-all"
          src={
            item?.poster_url.includes("https://img.phimapi.com")
              ? item.poster_url
              : "https://img.phimapi.com/" + item?.poster_url
          }
          alt={item?.name}
        />

        <span className="absolute top-1 left-1  bg-primary rounded p-1 text-[#fff]">
          Full HD
        </span>
      </div>

      <div className="flex justify-between flex-col sm:flex-row text-[#fff]">
        <div className="w-full sm:w-2/3">
          <h3 className="hover:text-primary my-2 duration-150  font-bold truncate">
            {item.name}
          </h3>
          <div className="h-full mb-2">
            <span className="border-2 border-primary px-2 py-0.5 rounded ">
              {item.quality}
            </span>
            <span className="bg-primary px-2 py-1 ml-1 text-[#fff] ">
              {item.lang}
            </span>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col w-full sm:w-1/3 items-end gap-1">
          <span className="text-primary font-medium sm:my-2  ">
            {item.year}
          </span>
          <span className="flex items-center gap-2 truncate">{item.time}</span>
        </div>
      </div>
    </div>
  );
}
