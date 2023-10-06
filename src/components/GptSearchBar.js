import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config?.lang);
  const searchText = useRef("");
  const dispatch = useDispatch();
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Hera Pheri";
    // Make an API call to fetch results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const searchTmdbMvie = async (movie) => {
      const movieData = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const movieJson = await movieData.json();
      return movieJson.results;
    };
    console.log(gptResults.choices);

    if (!gptResults.choices) {
      // Handle error
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseList = gptMovies.map((movie) => searchTmdbMvie(movie));

    const tmdbResults = await Promise.all(promiseList);

    dispatch(
      addGptMoviesResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 m-4 bg-red-700 rounded-lg text-white col-span-3"
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
