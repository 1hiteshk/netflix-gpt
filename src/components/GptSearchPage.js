import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <div className=''>
       <div className="fixed -z-10 ">
        <img
        className=' object-cover h-screen md:h-auto '
          src={BG_URL}
          alt="logo"
        />
      </div>
        <div className=''>
        <GptSearchBar />
        <GptMovieSuggestion />
        </div>
    </div>
  )
};

export default GptSearchPage;