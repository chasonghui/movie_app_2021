import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, movieCd, movieNm, rank, audiAcc, openDt }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: `/movie/${id}`,
                    state: {
                        movieCd,
                        movieNm,
                        rank,
                        audiAcc,
                        openDt
                    }
                }}>
                {/* 여기에 포스터가 있어야 하는데 .... */}
                <div className="movie_data">
                    <h3 className="movie__title">{movieNm}</h3>
                    <h5 className="movie__rank">{rank}</h5>
                    <p className="movie__open">{openDt}</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    movieCd: PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    audiAcc: PropTypes.string,
    openDt: PropTypes.string
};

export default Movie;