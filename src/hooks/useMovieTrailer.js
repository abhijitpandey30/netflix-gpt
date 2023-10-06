import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const videos = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await videos.json();
    console.log(json.results);
    const filterTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
   
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;