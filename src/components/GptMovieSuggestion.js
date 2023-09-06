import { useSelector } from "react-redux";
import Movielist from "./Movielist";


const GptMovieSuggestion = () => {
  const {movieResults, movieNames} = useSelector(store => store.gpt);
  if(!movieNames) return "no movies till now";

  return (
    <div className="m-4 p-4 bg-black/[0.8] text-white">
      <div>
        {movieNames.map((movieName,index) =>  <Movielist key={movieName} title={movieName} movies={movieResults[index]} /> )}
       
      </div>
      

    </div>
  )
}

export default GptMovieSuggestion;

// we are seeing the movie suggestion result movielist even after going to homepage then gptSearchpage bcoz of the resultMovies are stored in Redux store