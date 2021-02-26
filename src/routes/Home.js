import React from "react";
import axios from "axios";
import Movies from "../components/Movies";
import "./Home.css";

class Home extends React.Component{
  constructor(props){
    super(props);
  }
  state = {
    isLoading: true,
    movies: []
  };
  
  getMovies = async () => {
    const {
      data :{ 
        data :
        {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false })
  }

  componentDidMount(){
    this.getMovies();
  }
 
  render(){
    const { isLoading,movies } = this.state
    return (
      <section className= "container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movies => (
              <Movies 
                key={movies.id} 
                id={movies.id} 
                year={movies.year} 
                title={movies.title} 
                summary={movies.summary} 
                poster={movies.medium_cover_image}
                genres={movies.genres}
              />
            ))}
          </div>
          )}
      </section>
    )
    
  }
}

export default Home;