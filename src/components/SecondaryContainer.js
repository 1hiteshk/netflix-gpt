import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-60 pl-4 md:pl-12 relative z-20">
          <Movielist title={"Top Rated"} movies={movies.topRatedMovies} />
          <Movielist title={"Popular Movies"} movies={movies.popularMovies} />
          <Movielist title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
