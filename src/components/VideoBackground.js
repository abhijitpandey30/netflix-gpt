import React from "react";
import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  //const [trailerId, setTrailerId] = useState(null);
  //setTrailerId(trailer.key);

  // fetch trailer video and add in store
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  //(trailerVideo);

  return (
    <div className="w-screen">
      <iframe
       className="w-screen aspect-video"
        //src={"https://www.youtube.com/embed/" + trailerId}
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
