import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../../service/detailMovie";
import { Link } from "react-scroll";
import { FaCirclePlay, FaStar } from "react-icons/fa6";
import {
  MovieDetails,
  EpisodeItem,
  Episode,
  MovieAPIResponse,
} from "../../types/DetailMovie";

const MovieDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response: MovieAPIResponse = await getDetailMovie(slug);

        if (response.status) {
          setMovie(response.movie);
          setEpisodes(response.episodes);

          // Set the default video URL to the first episode
          if (
            response.episodes.length > 0 &&
            response.episodes[0].server_data.length > 0
          ) {
            setCurrentVideoUrl(response.episodes[0]?.server_data[0]?.link_embed);
            setSelectedEpisode(response.episodes[0]?.server_data[0]?.slug);
          }
        } else {
          console.error("Error fetching movie details.");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [slug]);

  const handleEpisodeClick = (link_embed: string, slug: string) => {
    setCurrentVideoUrl(link_embed);
    setSelectedEpisode(slug);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      {/* Render movie details here */}
      <div className="relative w-full">
        <img
          className="w-full h-full aspect-[3/2] rounded-sm object-cover "
          src={movie.thumb_url}
          alt={movie.name}
        />
        <div className="absolute z-10 left-4 bottom-4 md:left-10 md:bottom-10">
          <h2 className="text-white font-bold text-xl md:text-4xl uppercase">
            {movie.name}
          </h2>
          <div className="mt-5 flex flex-wrap items-center gap-2 md:text-base text-sm">
            <Link
              to="video"
              smooth={true}
              duration={500}
              className="flex items-center cursor-pointer bg-[#ff006e] gap-x-1 bg-secondaryColor px-2 py-1 rounded text-white transition-all hover:bg-[#ff006e]/80"
            >
              <FaCirclePlay />
              Xem ngay
            </Link>
            <div className="bg-primary rounded px-2 py-1 text-white">
              {movie.quality}
            </div>
            <div className="bg-primary rounded px-2 py-1 text-white">
              {movie.lang}
            </div>
            <div className="bg-primary rounded px-2 py-1 text-white">
              {movie.year}
            </div>
            <button className="flex items-center gap-x-2 font-semibold border-2 border-primary px-2 py-0.5 hover:bg-primaryColor hover:text-primary transition-all rounded">
              <FaStar />
              Thích
            </button>
          </div>
        </div>
      </div>
      <div className="text-primary">
        <div className="">
          Nội dung: <div className="text-[#fff] ">{movie.content}</div>
        </div>
        <div className="flex text-primary gap-2">
          Quốc gia:{" "}
          <div className="text-[#fff] ">
            {movie.country.map((c) => c.name).join(", ")}
          </div>
        </div>
        <div className="flex text-primary gap-2">
          Thời gian: <div className="text-[#fff] ">{movie.time}</div>
        </div>
        <div className="flex text-primary gap-2">
          Đạo diễn:{" "}
          <div className="text-[#fff] ">{movie.director.join(", ")}</div>
        </div>
        <div className=" text-primary gap-2">
          Diễn viên:{" "}
          <div className="text-[#fff] ">{movie.actor.join(", ")}</div>
        </div>
        <div className="flex text-primary gap-2">
          Thể loại:{" "}
          <div className="text-[#fff] ">
            {movie.category.map((cat) => cat.name).join(", ")}
          </div>
        </div>
      </div>

      {/* Iframe player */}
      {currentVideoUrl && (
        <div className="video mt-5 border-[1px] border-solid border-primary w-full h-full">
          <iframe
            src={currentVideoUrl}
            width="100%"
            height="500px"
            allowFullScreen
            allow="fullscreen" 
            title="Video Player"
          ></iframe>
        </div>
      )}

      {/* {currentVideoUrl && (
        <div className="video mt-5 border-[1px] border-solid border-primary w-full h-full">
          <video
            id="watchNow"
            src={currentVideoUrl}
            controls
            className="w-full h-full"
          ></video>
        </div>
      )} */}

      {/* Render episodes here */}
      <div className="episodes">
        <h3 className="text-primary text-2xl font-bold mt-5">Episodes</h3>
        {episodes.map((server: Episode, index) => (
          <div key={server.server_name}>
            <h4 className="text-primary text-xl mt-3">{server.server_name}</h4>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-12 text-center gap-2 py-5">
              {server.server_data.map((episode: EpisodeItem) => (
                <button
                  key={episode.slug}
                  onClick={() =>
                    handleEpisodeClick(episode.link_embed, episode.slug)
                  }
                  className={`flex justify-center p-2 transition-colors duration-300 rounded ${
                    selectedEpisode === episode.slug
                      ? "text-#fff bg-primary"
                      : "border-solid border-[1px] border-primary bg-#191919"
                  }`}
                >
                  {episode.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;
