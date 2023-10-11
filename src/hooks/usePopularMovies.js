import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(store=> store.movies?.popularMovies);
  useEffect(() => {
   !popularMovies &&  getPopularMovieList();
  }, []);

  const getPopularMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
};

export default useNowPlayingMovies;
