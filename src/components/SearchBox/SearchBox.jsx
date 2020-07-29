import React, { Component } from 'react';
import Movies from "../Movies";

export default class SearchBox extends Component {
  state = {  
    movieTitle: "",
    moviePlot: ""
  }


  getMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=c80b77be&t=Inception")
    .then(response => {
      return response.json();
    })
    .then(jsonObj => {
      this.setState({
        movieTitle: jsonObj.Title,
        moviePlot: jsonObj.Plot
      })
    })
  
    .catch(error => {
      console.log(error);
    })
  }

  render() { 
    return (
      <>
      <button onClick={this.getMovies}>Click for movie plots</button>
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