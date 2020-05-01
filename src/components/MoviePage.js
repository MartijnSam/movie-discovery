import React, { useState, useEffect } from "react";
import axios from "axios"

import { useParams } from "react-router-dom";

export default function MoviePage() {

  const route_parameters = useParams();
  const [movieData, set_movieData] = useState(false);
    console.log(route_parameters)

    const imdbid = route_parameters.imdb_id
    console.log(imdbid)
    const link = `https://omdbapi.com/?apikey=533b0367&i=${imdbid}`
    console.log(link)

useEffect( () => {async function getMovieData() 
  {console.log("getting movie data");
    
    const data = await axios.get(link);
    console.log("the data:", data)        
      return set_movieData(data.data)};
      getMovieData()}, [link])

const renderdata = () =>
{if (movieData === false)
        return ("Movie data not found (yet)")
    if (movieData !== false)
        return <div>movie title: {movieData.Title}</div>
}


  return (<div>{renderdata()}</div>);

}

