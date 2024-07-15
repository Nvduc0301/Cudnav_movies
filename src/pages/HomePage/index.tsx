import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

// import MovieCategory from "@/components/Movie/MovieCategory";
import MovieCategory from "../../components/Movie/MovieCategory";
import { useSeriesMovContext } from "../../contexts/SeriesMovies/SeriesMovContext";
import { useSingleMovContext } from "../../contexts/SingleMovies/SingleMovContext";
import { useAnimationMovContext } from "../../contexts/AnimationMovies/AnimationMovProvider";
import { useTvShowsContext } from "../../contexts/TvShows/TvShowsContext";
import MovieCarousel from "../../components/Movie/MovieCarousel";
import { getNewUpdate } from "../../service/homepage";
import { UpdateDataItem } from '@/types';

const HomePage = () => {
  const [updateFilmData, setUpdateFilmData] = useState<UpdateDataItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { singlemMovData } = useSingleMovContext();
  const { seriesMovData } = useSeriesMovContext();
  const { AnimationMovData } = useAnimationMovContext();
  const { TvShowsData } = useTvShowsContext();

  useEffect(() => {
    const fetchNewFilm = async () => {
      try {
        const data = await getNewUpdate();
        setUpdateFilmData(data.items)
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };
    fetchNewFilm();
  }, []);



  if (loading) {
    return <div className="font-bold">Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }
  return (
    <div className="py-10">
    {updateFilmData && (
      <MovieCarousel data={updateFilmData}/>
      )
    }

      {singlemMovData && (
        <MovieCategory
          title={singlemMovData.titlePage}
          movies={singlemMovData.items}
          pathAll="/phim-le"
        />
      )}

      {seriesMovData && (
        <MovieCategory
          title={seriesMovData.titlePage}
          movies={seriesMovData.items}
          pathAll="/phim-bo"
        />
      )}

      {AnimationMovData && (
        <MovieCategory
          title={AnimationMovData.titlePage}
          movies={AnimationMovData.items}
          pathAll="/hoat-hinh"
        />
      )}

      {TvShowsData && (
        <MovieCategory
          title={TvShowsData.titlePage}
          movies={TvShowsData.items}
          pathAll="/tv-shows"
        />
      )}
    </div>
  );
};

export default HomePage;
