import React from 'react'
import MovieSlice from '../utils/movieSlice'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    console.log(movies)

  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black'>
        <div className='-mt-44 pl-12 relative z-20'>
        <Movielist title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <Movielist title={"Popular"} movies={movies?.trendingMovies}/>
        <Movielist title={"Trending"} movies={movies?.upcomingMovies}/>
        <Movielist title={"Upcoming Movies"} movies={movies?.popularMovies}/>
        </div>
        {/* 
         Movielist - Popular
           MovieCard * n
         Movielist - Now Playing
         Movielist - Trending
         Movielist - Horror
         */}
    </div>
    )
  );
}

export default SecondaryContainer