import React, { useState } from "react";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState({status: "idle"})
  const [moviedata, set_moviedata] = useState(false)

const search = async () => { 

    console.log("start searching for:", searchText);
    set_searchState({status: "searching"});

     
    const queryParam = encodeURIComponent(searchText)
    const data = await axios.get(
        `https://omdbapi.com/?apikey=533b0367&s=${queryParam}`
      );
     
    set_searchState({status:"done"});
    console.log(data.data.Search)
    set_moviedata(data.data.Search)
};

const searchscreen = () =>
{
    if (searchState.status === "idle")
        return "Maybe search for a movie..."
    if (searchState.status === "searching")
        return "Searching for movies..."
    if (searchState.status === "done")
        return "Here are your movies:"
}

const rendermoviedata = () =>
{
    if (moviedata === false)
        return ""
    else return moviedata.map(movie => {
        return <li>{movie.Title}<img src={movie.Poster} alt="movieposter"></img></li>

})}

  return (
    <div>
      <h1>Discover some movies!</h1>
        <p>
            <input
            value={searchText}
            onChange={e => set_searchText(e.target.value)}
            />
            <button onClick={search}>Search</button>
        </p>
        <p>
        {searchscreen()}
        </p>
        <p>
        {rendermoviedata()}
        </p>
            

      
    </div>
  );
}