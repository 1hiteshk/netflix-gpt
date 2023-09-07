import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies === null) return; // bcoz initially the movies in store is null so, early return to not get any error if movies is null
   //if(!movies) movies not present

 let min = 0;
 let max = 20;
 const i = (Math.floor(Math.random() * (max - min )) + min);
//    console.log(i);
    const mainMovie = movies[i];
    console.log(mainMovie)

    const {original_title, overview,id} = mainMovie;
  return (
    <div className='pt-[30%] bg-black/[0.8] md:pt-0'>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer