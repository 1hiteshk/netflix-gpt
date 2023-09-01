import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
         MainContainer
         - videoBackground
         - videoTitle
         Secondary container
         - MovieList * n 
          -- cards * n
       */}
    </div>
  )
}

export default Browse