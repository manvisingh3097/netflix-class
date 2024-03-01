import axios from "./axios";
import { useState, useEffect } from "react";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, [])

  return(
    <div className="row">
        <h2>
            {title}
        </h2>
        <div className="row_posters">
            {
                movies.map((item) => {
                    return(
                        <img 
                        className="row_poster"
                        src={`${base_url}${item.poster_path}`}
                        onClick={()=> handleClick(item)}
                        />)
                })
            }

        </div>
    </div>
  )

}

export default  Row;
