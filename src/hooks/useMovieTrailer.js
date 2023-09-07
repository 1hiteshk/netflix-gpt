import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // const [trailerId, setTrailerId] = useState(null);

  const trailerVideo = useSelector(store => store.movies.trailerVideo);

  //fetch trailer video & updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    // if no trailer is present then take any video from json.results[] of that movieId
    const trailer = filterData.length ? filterData[0] : json.results[0]; // if multiple trailers then taking only first trailer
    console.log(trailer);
    // setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    if(!trailerVideo) getMovieVideos();
  }, []);
};

export default useMovieTrailer;
