import React from "react";
import axios from "axios";
import Movie from "./Movie"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const { data: { boxOfficeResult: { dailyBoxOfficeList } } } = await axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101");
    this.setState({ movies: dailyBoxOfficeList, isLoading: false })
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : movies.map(dailyBoxOfficeList => {
      return <Movie
        key={dailyBoxOfficeList.movieCd}
        movieCd={dailyBoxOfficeList.movieCd}
        movieNm={dailyBoxOfficeList.movieNm}
        rank={dailyBoxOfficeList.rank}
        audiAcc={dailyBoxOfficeList.audiAcc} />
    })}</div>;
  }
}

export default App;