import React from "react";
import './App.css';
import SearchIcon from './search.svg';
import { useEffect,useState } from "react";
import MovieCard from "./MovieCard";

const API_URL='http://www.omdbapi.com?apikey=9da13b6c';

/*const movie1={
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}*/
const App=()=>{
    const[movies,setmovies]=useState([]);
    const [searchterm,setsearchterm]=useState('');

    const searchMovies= async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data=await response.json(); 

        setmovies(data.Search);
    }
    useEffect(()=>{

        searchMovies('spiderman')

    },[])



    return (
<>
    <div className="app">
            <h1>Movie Theater</h1>
        <div className="search">
            <input
            placeholder="Search for Movies" 
            value={searchterm}
            onChange={(e)=>setsearchterm(e.target.value)}/>
            <img src={SearchIcon}
            alt="searchicon"
            onClick={()=>searchMovies(searchterm)}/>
        </div>

    {
        movies.length>0?(
            <div className="container">
                {movies.map((movie1)=>(
                    <MovieCard movie1={movie1}/>
                ))}
    </div>
        ):(
            <div className="empty">
                <h1>Movie Not Found</h1>
                </div>

        )
    }
    
   
    </div>
</>
    )
}

export default App