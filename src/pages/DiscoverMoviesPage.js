import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";


export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState({status: "idle"})
  const [moviesdata, set_moviesdata] = useState(false)

  const history = useHistory();
  const searchfor = useParams()

useEffect( () => {async function search(){   
    console.log("start searching for:", searchfor.searchtext);
    set_searchState({status: "searching"});
    const queryParam = encodeURIComponent(searchfor.searchtext)
    console.log(`getting data from:`,`https://omdbapi.com/?apikey=533b0367&s=${queryParam}`)
    const data = await axios.get(`https://omdbapi.com/?apikey=533b0367&s=${queryParam}`);
    set_searchState({status:"done"});
    console.log(`this is the data:`, data.data.Search)  
    return set_moviesdata(data.data.Search)}
    
        search()}, [searchfor])

const navigateToSearch = () => {
  const routeParam = encodeURIComponent(searchText);
  history.push(`/discover/${routeParam}`);}

const searchscreen = () =>
{
    if (searchState.status === "idle" || searchfor.searchtext === undefined)
        return "Maybe search for a movie..."
    if (searchState.status === "searching")
        return "Searching for movies..."
    if (searchState.status === "done")
        return "Here are your movies:"
}

const rendermoviedata = () =>
{
    if (moviesdata === false)
        return ""
    if (searchfor.searchtext === undefined)
        return ""
    if (moviesdata === undefined)
        return "No movies found... try again!"
    else return moviesdata.map(movie => {
        return <li>
            <p>{movie.Title}</p>
            <p><Link to={`/movie/${movie.imdbID}`}>More info</Link></p>

            <p><img src={movie.Poster} alt="movieposter"></img></p>
        </li>

})}

  return (
    <div>
      <h1>Discover some movies!</h1>
        <p>
            <input
            value={searchText}
            onChange={e => set_searchText(e.target.value)}
            />
            <button onClick={navigateToSearch}>Search</button>
        </p>
        <p>
        {searchscreen()}
        </p>
        <ul>{rendermoviedata()}</ul>
        
          
    </div>
  );
}