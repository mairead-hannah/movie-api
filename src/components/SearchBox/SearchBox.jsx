import React, { Component } from 'react';
import Movies from "../Movies";

export default class SearchBox extends Component {
  state = {  
    movieData: ""
  }


  getMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=c80b77be&t=Inception")
    .then(response => {
      return response.json();
    })
    .then(jsonObj => {
      const Plot = jsonObj.Plot;
      this.setState({movieData: Plot })
    })
    // this.setState({ movieData: "some movie data from the API"})
    .catch(error => {
      console.log(error);
    })
  }

  render() { 
    return (
      <>
      <button onClick={this.getMovies}>Click for movie plots</button>
      <p>{this.state.movieData}</p>
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