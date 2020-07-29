import React, { Component } from 'react';
import Movies from "../Movies";

export default class SearchBox extends Component {
  state = {  
    movieTitle: "",
    moviePlot: "",
    searchInput: ""
  }


  setMovie = (event) => {
    this.setState({searchInput: event.target.value})
  }

  getMovies = () => {
    fetch(`http://www.omdbapi.com/?apikey=c80b77be&t=${this.state.searchInput}`)
    .then(response => {
      return response.json();
    })
    .then(jsonObj => {
      this.setState({
        movieTitle: jsonObj.Title,
        moviePlot: jsonObj.Plot
        // movieData: jsonObj
      })
    })
  
    .catch(error => {
      console.log(error);
    })
  }

  render() { 
    return (
      <>
      <input type="text" placeholder="type a movie name" onChange={this.setMovie}></input>
      <button onClick={this.getMovies}>Click for movie details</button>
      <h2>{this.state.movieTitle}</h2>
      <p>{this.state.moviePlot}</p>
      <Movies/>
      </>
    );
  }
}


//API DOCS; 
// http://www.omdbapi.com/


//API KEY:
//c80b77be
//eg: http://www.omdbapi.com/?apikey=c80b77be&t=The+Matrix&y=1999

//Api key above is associated with mairead.coyle@nology.io