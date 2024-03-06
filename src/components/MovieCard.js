import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/constants';
import MovieDetailedCard from './MovieDetailedCard';

const MovieCard = ({posterPath,title,movie}) => {
  const [showModal, setShowModal] = useState(false);
    // console.log(posterPath, title)
    if(!posterPath) return null;
  return (
    <div>
    <div className="w-36 md:w-48 pr-4 cursor-pointer">
      <img
        className="rounded-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] "
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        onClick={() => {
          setShowModal(true);
        }}
      />
    </div>
    {showModal && (
      <MovieDetailedCard
        movie={movie}
        path={posterPath}
        onClose={() => setShowModal(false)}
      />
    )}
  </div>
  )
}

export default MovieCard