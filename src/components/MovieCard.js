import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      {posterPath ? (
        <img src={IMG_CDN_URL + posterPath} alt="movie" />
      ) : (
        <Shimmer/>
      )}
    </div>
  );
};

export default MovieCard;
