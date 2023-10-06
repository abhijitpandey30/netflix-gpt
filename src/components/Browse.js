import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Custom hooks
  useNowPlayingMovies();
  return (
    <div>
      <Header />
    <MainContainer/>
    <SecondaryContainer/>
      {/* 

        MainContainer
        - VideoBackground
        - MovieTtile

        SecondContainer
        - MovieList * n
          - movieCards * n
      
      */}
    </div>
  );
};

export default Browse;
