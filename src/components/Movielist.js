import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({title, movies}) => {
    console.log(movies)
  return (
    <div className='px-6 '>
      <h1 className='text-3xl text-white py-4'>{title}</h1>
    <div className='flex overflow-x-scroll '>
            
        <div className='flex'>
        {movies?.map(movie => ( <MovieCard key={movie?.id} posterPath={movie?.poster_path
} title={movie?.original_title}/>) )}
       </div>
    </div>
    </div>
  )
}

export default Movielist