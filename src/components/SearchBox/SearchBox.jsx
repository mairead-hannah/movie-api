import React, { Component } from 'react';
import Movies from "../Movies";

export default class SearchBox extends Component {
  state = {  
    movieTitle: "",
    movieYear: "",
    moviePlot: "",
    moviePoster: "",
    searchTitle: "",
    searchYear: ""
  }


  setTitle = (event) => {
    this.setState({searchTitle: event.target.value})
  }

  setYear = (event) => {
    this.setState({searchYear: event.target.value})
  }

  getMovies = () => {
    fetch(`http://www.omdbapi.com/?apikey=c80b77be&t=${this.state.searchTitle}&y=${this.state.searchYear}`)
    .then(response => {
      return response.json();
    })
    .then(jsonObj => {
      this.setState({
        movieTitle: jsonObj.Title,
        movieYear: jsonObj.Year,
        moviePlot: jsonObj.Plot,
        moviePoster: jsonObj.Poster
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
      <input type="text" placeholder="type a movie name" onChange={this.setTitle}></input>
      <input type="text" placeholder="type a year here (optional)" onChange={this.setYear}></input>
      <button onClick={this.getMovies}>Click for movie details</button>
      <h2>{this.state.movieTitle}</h2>
      <p>{this.state.movieYear}</p>
      <p>{this.state.moviePlot}</p>
      <img src ={this.state.moviePoster}></img>
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