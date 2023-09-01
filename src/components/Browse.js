import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearchPage";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      { showGptSearch ? <GptSearch /> : (
        <>
         <MainContainer />
      <SecondaryContainer />
        </>
      )}
     
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