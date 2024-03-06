import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import VideoBackground from "./VideoBackground";

const MovieDetailedCard = ({ movie, path, onClose }) => {
  const [showVideo, setShowVideo] = useState(false);
  const handleClickMovieTrailer = (movie) => {
    setShowVideo(true);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm overflow-y-auto">
      <div className="">
        <button
          className="text-white border-solid border-white border-2 rounded-lg px-3 py-2 mt-2 mr-2 bg-black hover:bg-gray-500 text-xl self-center absolute right-0 top-0"
          onClick={onClose}>
          X
        </button>
        {!showVideo ? (
          <div className="w-full text-white md:p-10 mt-20  justify-center md:flex bg-black opacity-80 rounded-lg">
            <div className="flex justify-center">
              <img
                className="h-72 rounded-lg "
                alt={movie.original_title}
                src={IMG_CDN_URL + path}
              />
            </div>
            <div className="w-full md:w-2/4 md:pl-10">
              <p className="text-4xl pb-6 font-bold flex justify-center">{movie.original_title}</p>
              <p className="text-xl px-2">{movie.overview}</p>
              <p className="text-xl px-2 py-2 ">
                {"Release Date : " + movie.release_date}
              </p>
             <div className="flex justify-center">
             <button
                className=" border-solid border-white border-2 py-1 px-5 rounded-lg text-xl text-center hover:bg-gray-500 my-4"
                onClick={handleClickMovieTrailer}>
                ▷ Play
              </button>
             </div>
            </div>
          </div>
        ) : (
          <VideoBackground
            movieId={movie.id}
            onClose={() => setShowVideo(false)}
          />
        )}
      </div>
    </div>
  );
};

export default MovieDetailedCard;
