import React from "react";
import MovieCard from "./components/MovieCard";
import animeList from "./dummy-data";

function App() {
  return (
    <div className="container my-5">
      <h1 className="text-center">Anime List</h1>
      <div className="container my-5">
        <div id="daftar-anime" className="row">
        {animeList.map((movie, index)=> (
          <div key={index} className="col-6 my-3">
            <MovieCard movie={movie}/>
          </div>
        ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
