import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
import { lang } from "../utils/constants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const languageKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

     // search movie in tmdb
     const searchMovieTMDB = async (movieName) => {
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_Options);
      const json = await data.json();

      return json.results;
    } 

  const handleGPTSearchClick = async() => {
    console.log(searchText.current.value);
   // searchText.current.value = '';
    // make an api call to GPT API and get movie results
    // const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Dhoom, Golmaal";
    // const gptResults = await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: gptQuery }],
    //     model: 'gpt-3.5-turbo',
    //   });

      // if(!gptResults.choices) {return "no mvies found"} // write error handling
      // console.log(gptResults.choices?.[0]?.message?.content);

      // this is to get array of movies
      // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
      const defaultMovies = ["Raaz","Mother India","Krrish","The Conjuring","Harry Potter"];

      // for each movie i will search tmdb api
// this map fn will not wait ,make a api call, & it will make the 5 api calls instant.
// searchMovieTMDB will return a promise and it takes sometime to come up with json.results

      // const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
      const promiseArray = defaultMovies.map(movie => searchMovieTMDB(movie));

      // [Promise,promise,promise,promise,promise]
      // this promise.all() takes the array of promises
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(addGptMovies({movieNames: defaultMovies,movieResults: tmdbResults}));
}

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-2/3 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded col-span-3"
          onClick={handleGPTSearchClick}>
         {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
