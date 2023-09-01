import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath,title}) => {
    // console.log(posterPath, title)
  return (
    <div className='w-48 pr-4'>
        <img src={IMG_CDN_URL+posterPath} alt={title} />
    </div>
  )
}

export default MovieCard