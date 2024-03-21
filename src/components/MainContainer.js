import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  //this mainContainer needs the movie data so we have to subscribe the store using selector to get the data from store

  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movie === null) return; // check imovie is null then return, it will not go down

  let min = 0;
 let max = 20;
 const i = (Math.floor(Math.random() * (max - min )) + min);
//    console.log(i);
    const mainMovie = movie[i];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
