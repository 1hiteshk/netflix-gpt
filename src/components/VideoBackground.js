import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const VideoBackground = ({ movieId }) => {

    const [trailerId, setTrailerId] = useState(null);
  //fetch trailer
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/615656/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    // if no trailer is present then take any video from json.results[] of that movieId
    const trailer = filterData.length ? filterData[0] : json.results[0]; // if multiple trailers then taking only first trailer
    console.log(trailer);
    setTrailerId(trailer.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/dG91B3hHyY4?si="+ trailerId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
