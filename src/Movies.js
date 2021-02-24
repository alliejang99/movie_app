import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";

function Movies({ year, title, summary, poster, genres }){
    return (
    <div className="movie">
        <div className="movie_data">
            <img src={poster} alt={title} title={title} />
            <div className="box">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">
                    {genres.map(( genres, index )=> (
                        <li key={index} className="genres_genre">{genres}</li>
                    ))}
                </ul>
                <p className="movie_summary">{summary.slice(0,180)}...</p>
            </div>
        </div>    
    </div>);
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movies;
