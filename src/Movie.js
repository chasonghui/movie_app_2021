import React from "react";
import PropTypes from "prop-types";

function Movie({ movieCd, movieNm, rank, audiAcc }) {
    return <h5>{movieNm}</h5>;
}

Movie.propTypes = {
    movieCd: PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    audiAcc: PropTypes.string
};

export default Movie;